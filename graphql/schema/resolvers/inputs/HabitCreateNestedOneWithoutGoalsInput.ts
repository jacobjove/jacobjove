import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutGoalsInput } from "../inputs/HabitCreateOrConnectWithoutGoalsInput";
import { HabitCreateWithoutGoalsInput } from "../inputs/HabitCreateWithoutGoalsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutGoalsInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutGoalsInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutGoalsInput, { nullable: true })
  create?: HabitCreateWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutGoalsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
