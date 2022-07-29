import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("JsonFilter", {
  isAbstract: true,
})
export class JsonFilter {
  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  equals?: Record<string, string> | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  not?: Record<string, string> | undefined;
}
