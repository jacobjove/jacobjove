import * as resolversImport from "@/graphql/schema/generated/resolvers";

// export * from "./enums";
// export * from "@/graphql/schema/generated";
// export * from "./resolvers";
// export * from "./scalars";

export const resolvers = Object.values(resolversImport);
