import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("NestedBoolWithAggregatesFilter", { isAbstract: true })
export class NestedBoolWithAggregatesFilter {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _min?: NestedBoolFilter | undefined;

  @TypeGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _max?: NestedBoolFilter | undefined;
}
