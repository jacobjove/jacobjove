import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../models/Habit";
import { GoalCount } from "../resolvers/outputs/GoalCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Goal", {
  isAbstract: true,
})
export class Goal extends Model {
  habit?: Habit;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  goalId?: string | null;

  goal?: Goal | null;

  milestones?: Goal[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => GoalCount, { nullable: true })
  _count?: GoalCount | null;
}
