import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutRoutinesInput } from "../inputs/HabitCreateWithoutRoutinesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutRoutinesInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutRoutinesInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutRoutinesInput, { nullable: false })
  create!: HabitCreateWithoutRoutinesInput;
}
