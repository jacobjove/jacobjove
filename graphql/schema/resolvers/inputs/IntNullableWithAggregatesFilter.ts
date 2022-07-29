import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedIntNullableWithAggregatesFilter } from "../inputs/NestedIntNullableWithAggregatesFilter";

@TypeGraphQL.InputType("IntNullableWithAggregatesFilter", {
  isAbstract: true,
})
export class IntNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
  not?: NestedIntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedFloatNullableFilter, { nullable: true })
  _avg?: NestedFloatNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _sum?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _min?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _max?: NestedIntNullableFilter | undefined;
}
