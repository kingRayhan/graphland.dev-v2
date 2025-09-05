import { CodegenConfig } from "@graphql-codegen/cli";

import dotenv from "dotenv";

dotenv.config({
  path: [".env", ".env.local", ".env.development", ".env.development.local"],
});

const config: CodegenConfig = {
  schema:
    `https://xhuzhvz4.api.sanity.io/v2023-08-01/graphql/production/default` as string,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/common/graphql-models/": {
      preset: "client",
    },
  },
};

export default config;
