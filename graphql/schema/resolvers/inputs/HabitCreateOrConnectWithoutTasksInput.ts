import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutTasksInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutTasksInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutTasksInput;
}
