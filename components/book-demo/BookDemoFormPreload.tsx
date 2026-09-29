"use client";

import { useEffect } from "react";
import { startMeetingsPreload } from "@/components/book-demo/meetings-embed";

export default function BookDemoFormPreload() {
  useEffect(() => {
    const start = () => startMeetingsPreload();

    if (document.readyState === "complete") {
      start();
      return;
    }

    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://meetings-eu1.hubspot.com" />
      <link rel="preconnect" href="https://static.hsappstatic.net" crossOrigin="" />
    </>
  );
}
