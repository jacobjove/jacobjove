import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("GoalScalarWhereInput", { isAbstract: true })
export class GoalScalarWhereInput {
  @TypeGraphQL.Field(() => [GoalScalarWhereInput], { nullable: true })
  AND?: GoalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalScalarWhereInput], { nullable: true })
  OR?: GoalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalScalarWhereInput], { nullable: true })
  NOT?: GoalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  goalId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;
}
