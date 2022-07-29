import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedJsonFilter", {
  isAbstract: true,
})
export class NestedJsonFilter {
  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  equals?: Record<string, string> | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  not?: Record<string, string> | undefined;
}
