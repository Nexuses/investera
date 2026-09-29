import Image from "next/image";
import type { ReactNode } from "react";
import type { ArticleBlock } from "@/lib/blog-articles";

/** Renders **bold** markers as <strong>. */
function rich(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-[#111827]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="mt-5 text-[17px] leading-[1.7] text-[#374151]">
                {rich(block.text)}
              </p>
            );
          case "h2":
            return (
              <h2
                key={index}
                className="mt-14 text-[26px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57] sm:text-[30px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="mt-10 text-[21px] font-semibold leading-[1.3] text-[#0c2d57]">
                {block.text}
              </h3>
            );
          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag
                key={index}
                className={`mt-6 space-y-4 pl-5 text-[17px] leading-[1.65] text-[#374151] marker:text-[#CCA400] ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item) => (
                  <li key={item.slice(0, 40)} className="pl-1">
                    {rich(item)}
                  </li>
                ))}
              </Tag>
            );
          }
          case "stats":
            return (
              <div
                key={index}
                className={`my-10 grid gap-4 ${
                  block.items.length === 1
                    ? "sm:grid-cols-1"
                    : block.items.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-3"
                }`}
              >
                {block.items.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[16px] border border-[#E3EAF3] bg-gradient-to-br from-[#F4F8FD] to-white px-5 py-5"
                  >
                    <p className="text-[34px] font-semibold leading-none tracking-[-0.02em] text-[#0c2d57]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.45] text-[#4B5563]">{stat.label}</p>
                    {stat.source && (
                      <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#A68A00]">
                        Source: {stat.source}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            );
          case "figure":
            return (
              <figure key={index} className="my-12 -mx-2 sm:-mx-10 lg:-mx-24">
                <div
                  className={`overflow-hidden rounded-[18px] border shadow-[0_18px_48px_rgba(12,45,87,0.12)] ${
                    block.dark ? "border-[#1E293B] bg-[#0B1120]" : "border-[#E5E7EB] bg-white"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`flex items-center gap-1.5 px-4 py-2.5 ${
                      block.dark ? "bg-[#111a2e]" : "bg-[#F3F5F8]"
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
                  </div>
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={block.width}
                    height={block.height}
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 px-2 text-center text-[14px] leading-[1.5] text-[#6B7280] sm:px-10 lg:px-24">
                  {block.caption}
                </figcaption>
              </figure>
            );
          case "table":
            return (
              <div key={index} className="my-10 overflow-x-auto rounded-[14px] border border-[#E5E7EB]">
                <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
                  <caption className="bg-[#0c2d57] px-5 py-3 text-left text-[14px] font-semibold text-white">
                    {block.caption}
                  </caption>
                  <thead className="bg-[#F3F5F8] text-[13px] uppercase tracking-[0.06em] text-[#374151]">
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col" className="px-5 py-3 font-semibold">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-[#E5E7EB] align-top">
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th key={cell} scope="row" className="px-5 py-4 font-semibold text-[#0c2d57]">
                              {cell}
                            </th>
                          ) : (
                            <td key={cell} className="px-5 py-4 leading-[1.5] text-[#4B5563]">
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="my-10 rounded-[16px] border-l-4 border-[#CCA400] bg-[#FFF8E6] px-6 py-5"
              >
                <p className="text-[16px] font-semibold text-[#0c2d57]">{block.title}</p>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#4B5563]">{rich(block.text)}</p>
              </aside>
            );
        }
      })}
    </>
  );
}
