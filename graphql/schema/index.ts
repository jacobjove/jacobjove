import * as crudResolversImport from "./resolvers/crud/resolvers-crud.index";
import * as relationResolversImport from "./resolvers/relations/resolvers.index";

export * from "./enhance";
export * from "./enums";
export * from "./models";
export * from "./resolvers/crud";
export * from "./resolvers/inputs";
export * from "./resolvers/other";
export * from "./resolvers/outputs";
export * from "./resolvers/relations";
export * from "./scalars";

export const crudResolvers = Object.values(crudResolversImport);

export const relationResolvers = Object.values(relationResolversImport);

export const resolvers = [...crudResolvers, ...relationResolvers];
