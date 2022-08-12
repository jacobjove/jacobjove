import Definition from "@/graphql/schema/definition";
import JSON5 from "json5";
import path from "path";

const TYPE_CAST_MAP = {
  ID: "ObjectId",
  String: "String",
  Boolean: "Boolean",
};

module.exports = {
  params: async ({ args }: { args: { definition: string } }) => {
    const projectRoot = path.dirname(path.dirname(path.dirname(__dirname)));
    if (!args.definition) throw new Error("Must specify definition.");
    const definitionPath = `${projectRoot}/graphql/schema/definitions/${args.definition}`;
    const definition = (await import(definitionPath)).default as Definition;
    if (!definition) throw new Error(`Failed to load definition from ${definitionPath}`);
    const modifiedDefinition = {
      ...definition,
      fields: Object.fromEntries(
        Object.entries(definition.fields).map(([key, value]) => {
          return [
            key,
            {
              ...value,
              typeCast: value.typeCast ?? TYPE_CAST_MAP[value.type as keyof typeof TYPE_CAST_MAP],
            },
          ];
        })
      ),
    };
    return {
      hooks: {},
      modelImports: [],
      ...modifiedDefinition,
      selectableFields: Object.fromEntries(
        Object.entries(modifiedDefinition.fields).filter(([, field]) => field.select !== false)
      ),
      ...args,
      JSON5,
    };
  },
};
