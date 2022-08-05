import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutActionsInput } from "../inputs/HabitCreateWithoutActionsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutActionsInput", { isAbstract: true })
export class HabitCreateOrConnectWithoutActionsInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutActionsInput, { nullable: false })
  create!: HabitCreateWithoutActionsInput;
}
