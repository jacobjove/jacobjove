import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutActInput", { isAbstract: true })
export class HabitCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutActInput, { nullable: false })
  create!: HabitCreateWithoutActInput;
}
