import path from "path";
import Definition from "@/graphql/schema/definition"; 

module.exports = {
  params: async ({ args }: { args: { definition: string } }) => {
    const projectRoot = path.dirname(path.dirname(path.dirname((__dirname))));
    if (!args.definition) throw new Error("Must specify definition.");
    const definitionPath = `${projectRoot}/graphql/schema/definitions/${args.definition}`;
    const definition = (await import(definitionPath)).default as Definition;
    if (!definition) throw new Error(`Failed to load definition from ${definitionPath}`);
    return {
      hooks: {},
      modelImports: [],
      ...definition,
      selectableFields: Object.fromEntries(Object.entries(definition.fields).filter(([, field]) => field.select !== false)),
      ...args,
    }
  },
}