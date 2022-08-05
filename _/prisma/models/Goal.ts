import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "./Habit";

@TypeGraphQL.ObjectType("Goal", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Goal extends Model {
  habit?: Habit;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  habitId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  goalId?: string | null;

  goal?: Goal | null;

  milestones?: Goal[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  quantity!: number;
}

const GoalModel = getModelForClass<typeof Goal>(Goal);
export default GoalModel;
