import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalListRelationFilter } from "../inputs/GoalListRelationFilter";
import { GoalRelationFilter } from "../inputs/GoalRelationFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("GoalWhereInput", {
  isAbstract: true,
})
export class GoalWhereInput {
  @TypeGraphQL.Field(() => [GoalWhereInput], { nullable: true })
  AND?: GoalWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalWhereInput], { nullable: true })
  OR?: GoalWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalWhereInput], { nullable: true })
  NOT?: GoalWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  goalId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => GoalRelationFilter, { nullable: true })
  goal?: GoalRelationFilter | undefined;

  @TypeGraphQL.Field(() => GoalListRelationFilter, { nullable: true })
  milestones?: GoalListRelationFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;
}
