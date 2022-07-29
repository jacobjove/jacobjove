import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalScalarFieldEnum } from "../../../../enums/GoalScalarFieldEnum";
import { GoalOrderByWithRelationInput } from "../../../inputs/GoalOrderByWithRelationInput";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class HabitGoalsArgs {
  @TypeGraphQL.Field(() => GoalWhereInput, { nullable: true })
  where?: GoalWhereInput | undefined;

  @TypeGraphQL.Field(() => [GoalOrderByWithRelationInput], { nullable: true })
  orderBy?: GoalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: true })
  cursor?: GoalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [GoalScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "habitId" | "goalId" | "quantity"> | undefined;
}
