import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutTasksInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutTasksInput, { nullable: false })
  create!: HabitCreateWithoutTasksInput;
}
