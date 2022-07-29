import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedBoolNullableFilter", {
  isAbstract: true,
})
export class NestedBoolNullableFilter {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  not?: NestedBoolNullableFilter | undefined;
}
