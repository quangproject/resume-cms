import path from "path";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import Users from "./collections/Overviews/Users";
import collections from "./collections";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler()
  },
  editor: slateEditor({}),
  collections,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts")
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql")
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI
  }),
  rateLimit: {
    skip: () => true
  },
  cors: "*"
});
