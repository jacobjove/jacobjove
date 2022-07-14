import * as TypeGraphQL from "type-graphql";

export enum LIST_FIELD_TYPE {
  STRING = "STRING",
  INT = "INT",
  FLOAT = "FLOAT",
  DATE = "DATE",
  DATETIME = "DATETIME",
  BOOLEAN = "BOOLEAN",
}
TypeGraphQL.registerEnumType(LIST_FIELD_TYPE, {
  name: "LIST_FIELD_TYPE",
  description: undefined,
});
