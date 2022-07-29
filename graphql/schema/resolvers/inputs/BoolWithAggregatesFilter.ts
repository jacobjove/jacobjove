import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedBoolWithAggregatesFilter } from "../inputs/NestedBoolWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("BoolWithAggregatesFilter", {
  isAbstract: true,
})
export class BoolWithAggregatesFilter {
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
