import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({
  path: [".env", ".env.local", ".env.development", ".env.development.local"],
});

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/": { preset: "client" },
  },
};
export default config;
