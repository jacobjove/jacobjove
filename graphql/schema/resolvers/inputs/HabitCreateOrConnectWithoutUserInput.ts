import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutUserInput, { nullable: false })
  create!: HabitCreateWithoutUserInput;
}
