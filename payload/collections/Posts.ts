import { revalidatePath } from "next/cache";
import type {
  Block,
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  CollectionConfig,
  TextFieldSingleValidation,
} from "payload";
import { blogCategories } from "@/components/insights-data";
import { slugify } from "@/lib/slugify";

/** Requires either an uploaded image in `uploadField` or an image URL. */
const imageOrUrl =
  (uploadField: string, message: string): TextFieldSingleValidation =>
  (value, { siblingData }) =>
    value || (siblingData as Record<string, unknown>)?.[uploadField] ? true : message;

/** Refreshes every page that lists or renders blog posts. */
function revalidateBlog(slugs: (string | null | undefined)[]) {
  try {
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/(frontend)/blog/[slug]", "page");
    for (const slug of new Set(slugs.filter(Boolean))) {
      revalidatePath(`/blog/${slug}`);
    }
    revalidatePath("/sitemap.xml");
    revalidatePath("/llms.txt");
    revalidatePath("/llms-full.txt");
  } catch {
    // Outside a Next.js request (e.g. the seed script) there is no cache to revalidate.
  }
}

const revalidateAfterChange: CollectionAfterChangeHook = ({ doc, previousDoc }) => {
  if (doc._status === "published" || previousDoc?._status === "published") {
    revalidateBlog([doc.slug, previousDoc?.slug]);
  }
  return doc;
};

const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  revalidateBlog([doc?.slug]);
  return doc;
};

const contentBlocks: Block[] = [
  {
    slug: "p",
    labels: { singular: "Paragraph", plural: "Paragraphs" },
    fields: [
      {
        name: "text",
        type: "textarea",
        required: true,
        admin: { description: "Wrap words in **double asterisks** to make them bold." },
      },
    ],
  },
  {
    slug: "h2",
    labels: { singular: "Heading", plural: "Headings" },
    fields: [{ name: "text", type: "text", required: true }],
  },
  {
    slug: "h3",
    labels: { singular: "Subheading", plural: "Subheadings" },
    fields: [{ name: "text", type: "text", required: true }],
  },
  {
    slug: "list",
    labels: { singular: "List", plural: "Lists" },
    fields: [
      { name: "ordered", type: "checkbox", label: "Numbered list" },
      {
        name: "items",
        type: "array",
        required: true,
        minRows: 1,
        fields: [
          {
            name: "text",
            type: "textarea",
            required: true,
            admin: { description: "Supports **bold** text." },
          },
        ],
      },
    ],
  },
  {
    slug: "stats",
    labels: { singular: "Stats", plural: "Stats" },
    fields: [
      {
        name: "items",
        type: "array",
        required: true,
        minRows: 1,
        maxRows: 3,
        fields: [
          { name: "value", type: "text", required: true, admin: { description: "e.g. 90% or $18.2bn" } },
          { name: "label", type: "text", required: true },
          { name: "source", type: "text" },
        ],
      },
    ],
  },
  {
    slug: "figure",
    labels: { singular: "Image", plural: "Images" },
    fields: [
      { name: "image", type: "upload", relationTo: "media" },
      {
        name: "src",
        type: "text",
        label: "Image URL",
        admin: { description: "Used when no image is uploaded, e.g. /images/blog/deal-pipeline.webp" },
        validate: imageOrUrl("image", "Upload an image or enter an image URL."),
      },
      { name: "alt", type: "text", required: true, label: "Alt text" },
      { name: "caption", type: "text", required: true },
      {
        type: "row",
        fields: [
          { name: "width", type: "number", defaultValue: 1440, admin: { description: "Only for image URLs" } },
          { name: "height", type: "number", defaultValue: 900, admin: { description: "Only for image URLs" } },
        ],
      },
      { name: "dark", type: "checkbox", label: "Dark frame" },
    ],
  },
  {
    slug: "table",
    labels: { singular: "Table", plural: "Tables" },
    fields: [
      { name: "caption", type: "text", required: true },
      {
        name: "head",
        type: "array",
        label: "Column headings",
        required: true,
        minRows: 1,
        fields: [{ name: "text", type: "text", required: true }],
      },
      {
        name: "rows",
        type: "array",
        required: true,
        minRows: 1,
        fields: [
          {
            name: "cells",
            type: "array",
            required: true,
            minRows: 1,
            fields: [{ name: "text", type: "text", required: true }],
          },
        ],
      },
    ],
  },
  {
    slug: "callout",
    labels: { singular: "Callout", plural: "Callouts" },
    fields: [
      { name: "title", type: "text", required: true },
      { name: "text", type: "textarea", required: true, admin: { description: "Supports **bold** text." } },
    ],
  },
];

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Blog Post", plural: "Blog Posts" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedDate", "_status"],
    preview: (doc) => (doc?.slug ? `/blog/${doc.slug}` : null),
  },
  defaultSort: "-publishedDate",
  access: {
    read: ({ req: { user } }) => (user ? true : { _status: { equals: "published" } }),
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: { description: "Headline shown on the blog card and article page." },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        components: {
          Field: {
            path: "/payload/components/SlugField#SlugField",
            clientProps: { sourceField: "title", lockField: "slugLock" },
          },
        },
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (typeof value === "string" && value) return slugify(value);
            if (typeof data?.title === "string") return slugify(data.title);
            return value;
          },
        ],
      },
    },
    {
      name: "slugLock",
      type: "checkbox",
      defaultValue: true,
      admin: { hidden: true },
    },
    {
      name: "subtitle",
      type: "textarea",
      required: true,
      admin: { description: "Short summary shown under the headline." },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Cover",
          fields: [
            { name: "coverImage", type: "upload", relationTo: "media" },
            {
              name: "coverImageUrl",
              type: "text",
              label: "Cover image URL",
              admin: { description: "Used when no cover image is uploaded." },
              validate: imageOrUrl("coverImage", "Upload a cover image or enter an image URL."),
            },
            { name: "coverImageAlt", type: "text", required: true, label: "Cover image alt text" },
          ],
        },
        {
          label: "Content",
          fields: [
            { name: "intro", type: "textarea", required: true, admin: { description: "Opening paragraph." } },
            { name: "content", type: "blocks", blocks: contentBlocks },
            { name: "takeaway", type: "textarea", label: "Key takeaway" },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "seoTitle",
              type: "text",
              label: "SEO title",
              admin: { description: "Optional shorter title for search results. Defaults to the headline." },
            },
            {
              name: "metaDescription",
              type: "textarea",
              admin: { description: "Defaults to the subtitle." },
            },
          ],
        },
      ],
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: blogCategories.map((category) => ({ label: category, value: category })),
      admin: { position: "sidebar" },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" } },
    },
    {
      name: "readingTime",
      type: "text",
      admin: { position: "sidebar", description: "e.g. 5 min read. Calculated automatically if left empty." },
    },
  ],
};
