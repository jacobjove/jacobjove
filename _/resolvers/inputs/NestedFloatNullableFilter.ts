import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedFloatNullableFilter", { isAbstract: true })
export class NestedFloatNullableFilter {
  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  equals?: number | undefined;

  @TypeGraphQL.Field(() => [TypeGraphQL.Float], { nullable: true })
  in?: number[] | undefined;

  @TypeGraphQL.Field(() => [TypeGraphQL.Float], { nullable: true })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  lt?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  lte?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  gt?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  gte?: number | undefined;

  @TypeGraphQL.Field(() => NestedFloatNullableFilter, { nullable: true })
  not?: NestedFloatNullableFilter | undefined;
}
