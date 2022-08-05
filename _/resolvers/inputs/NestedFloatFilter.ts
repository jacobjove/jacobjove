import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedFloatFilter", { isAbstract: true })
export class NestedFloatFilter {
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

  @TypeGraphQL.Field(() => NestedFloatFilter, { nullable: true })
  not?: NestedFloatFilter | undefined;
}
