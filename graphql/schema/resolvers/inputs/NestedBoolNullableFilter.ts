import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedBoolNullableFilter", {
  isAbstract: true,
})
export class NestedBoolNullableFilter {
  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field((_type) => NestedBoolNullableFilter, { nullable: true })
  not?: NestedBoolNullableFilter | undefined;
}
