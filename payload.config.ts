import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import { buildConfig } from "payload";
import { Media } from "./payload/collections/Media";
import { Posts } from "./payload/collections/Posts";
import { Users } from "./payload/collections/Users";

const rootDir = process.cwd();

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: rootDir,
    },
    meta: {
      titleSuffix: " – Investera Admin",
    },
  },
  collections: [Posts, Media, Users],
  secret: process.env.AUTH_SECRET || process.env.PAYLOAD_SECRET || "",
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL?.replace(/\/+$/, "") || "",
  typescript: {
    outputFile: path.resolve(rootDir, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
    connectOptions: {
      dbName: process.env.MONGODB_DB?.trim() || "investera",
    },
  }),
});
