import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("NestedIntWithAggregatesFilter", { isAbstract: true })
export class NestedIntWithAggregatesFilter {
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

  @TypeGraphQL.Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: NestedIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedFloatFilter, { nullable: true })
  _avg?: NestedFloatFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _sum?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _min?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _max?: NestedIntFilter | undefined;
}
