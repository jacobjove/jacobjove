import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutSchedulesInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutSchedulesInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutSchedulesInput, { nullable: false })
  create!: HabitCreateWithoutSchedulesInput;
}
