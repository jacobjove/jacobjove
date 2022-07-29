import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("GoalScalarWhereInput", {
  isAbstract: true,
})
export class GoalScalarWhereInput {
  @TypeGraphQL.Field((_type) => [GoalScalarWhereInput], { nullable: true })
  AND?: GoalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalScalarWhereInput], { nullable: true })
  OR?: GoalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalScalarWhereInput], { nullable: true })
  NOT?: GoalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  goalId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;
}
