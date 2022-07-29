import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GoalScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class GoalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [GoalScalarWhereWithAggregatesInput], { nullable: true })
  AND?: GoalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalScalarWhereWithAggregatesInput], { nullable: true })
  OR?: GoalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: GoalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  habitId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  goalId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  quantity?: IntWithAggregatesFilter | undefined;
}
