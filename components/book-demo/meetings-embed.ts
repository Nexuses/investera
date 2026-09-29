export const MEETINGS_EMBED_SRC =
  "https://meetings-eu1.hubspot.com/meetings/diana-w-sabaa/discover-inbound-?embed=true";
export const MEETINGS_EMBED_SCRIPT =
  "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

const CONTAINER_CLASS =
  "meetings-iframe-container h-[600px] w-full bg-[#415b76] [&_iframe]:!h-[600px] [&_iframe]:!max-h-[600px] [&_iframe]:!min-h-0 [&_iframe]:!w-full [&_iframe]:!bg-[#415b76] [&_iframe]:border-0 [&_iframe]:[scrollbar-width:none]";

type MeetingsWindow = Window & {
  hbspt?: {
    meetings?: {
      create?: (selector: string) => void;
    };
  };
};

let holder: HTMLDivElement | null = null;
let container: HTMLDivElement | null = null;
let started = false;

function tuneIframe(iframe: HTMLIFrameElement) {
  if (iframe.getAttribute("scrolling") !== "no") {
    iframe.setAttribute("scrolling", "no");
  }
}

function watchIframe(target: HTMLElement) {
  const apply = () => {
    const iframe = target.querySelector("iframe");
    if (iframe) {
      tuneIframe(iframe);
    }
  };

  apply();
  const observer = new MutationObserver(apply);
  observer.observe(target, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["scrolling"],
  });
  return () => observer.disconnect();
}

function ensureScript(target: HTMLElement) {
  const mount = () => {
    if (target.querySelector("iframe")) {
      return;
    }
    (window as MeetingsWindow).hbspt?.meetings?.create?.(".meetings-iframe-container");
  };

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${MEETINGS_EMBED_SCRIPT}"]`,
  );

  if (existingScript) {
    if ((window as MeetingsWindow).hbspt?.meetings?.create) {
      mount();
    } else {
      existingScript.addEventListener("load", mount, { once: true });
    }
    return;
  }

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = MEETINGS_EMBED_SCRIPT;
  script.async = true;
  script.addEventListener("load", mount, { once: true });
  document.body.appendChild(script);
}

export function startMeetingsPreload() {
  if (started || typeof document === "undefined") {
    return;
  }
  started = true;

  holder = document.createElement("div");
  holder.setAttribute("aria-hidden", "true");
  holder.style.cssText =
    "position:fixed;top:0;left:-10000px;width:640px;height:700px;overflow:hidden;opacity:0;pointer-events:none;";
  document.body.appendChild(holder);

  container = document.createElement("div");
  container.className = CONTAINER_CLASS;
  container.dataset.src = MEETINGS_EMBED_SRC;
  holder.appendChild(container);
  ensureScript(container);
  watchIframe(container);
}

export function mountMeetingsEmbed(slot: HTMLElement) {
  startMeetingsPreload();
  if (!container || !holder) {
    return () => undefined;
  }

  slot.appendChild(container);
  const stopWatching = watchIframe(container);

  return () => {
    stopWatching();
    if (container && holder) {
      holder.appendChild(container);
    }
  };
}
