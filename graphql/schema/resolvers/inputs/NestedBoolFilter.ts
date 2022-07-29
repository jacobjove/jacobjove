import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedBoolFilter", {
  isAbstract: true,
})
export class NestedBoolFilter {
  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field((_type) => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}
