import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutGoalsInput } from "../inputs/HabitCreateWithoutGoalsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutGoalsInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutGoalsInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutGoalsInput, { nullable: false })
  create!: HabitCreateWithoutGoalsInput;
}
