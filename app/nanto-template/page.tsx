import Link from "next/link";

export default function NantoTemplatePage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] p-4 md:p-6">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white">
          <h1 className="text-lg font-semibold">Nanto Template Preview</h1>
          <Link
            href="https://nanto-template.webflow.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0b0f14] transition-opacity hover:opacity-90"
          >
            Open Original
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
          <iframe
            title="Nanto Webflow Template"
            src="https://nanto-template.webflow.io/"
            className="h-[calc(100vh-120px)] w-full"
          />
        </div>
      </div>
    </main>
  );
}
