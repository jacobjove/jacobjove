import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedIntFilter", { isAbstract: true })
export class NestedIntFilter {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  equals?: number | undefined;

  @TypeGraphQL.Field(() => [TypeGraphQL.Int], { nullable: true })
  in?: number[] | undefined;

  @TypeGraphQL.Field(() => [TypeGraphQL.Int], { nullable: true })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  lt?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  lte?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  gt?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  gte?: number | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  not?: NestedIntFilter | undefined;
}
