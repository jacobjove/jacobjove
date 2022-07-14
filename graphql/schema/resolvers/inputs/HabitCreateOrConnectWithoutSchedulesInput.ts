import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutSchedulesInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutSchedulesInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutSchedulesInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutSchedulesInput;
}
