import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";
import { NestedBoolNullableWithAggregatesFilter } from "../inputs/NestedBoolNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("BoolNullableWithAggregatesFilter", { isAbstract: true })
export class BoolNullableWithAggregatesFilter {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(() => NestedBoolNullableWithAggregatesFilter, { nullable: true })
  not?: NestedBoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  _min?: NestedBoolNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  _max?: NestedBoolNullableFilter | undefined;
}
