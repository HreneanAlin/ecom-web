import { CodegenConfig } from "@graphql-codegen/cli"
import { config } from "dotenv"
config({ path: ".env.local" })

const codegenConfig: CodegenConfig = {
  schema: [
    `${process.env.VITE_API_URL}/graphql`,
    "ws://localhost:4008/graphql",
  ],
  overwrite: true,
  documents: "src/graphql/**/*.gql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      config: {
        withHooks: true,
      },
    },
  },
}

export default codegenConfig
