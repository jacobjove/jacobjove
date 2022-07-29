import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutGoalsInput } from "../inputs/HabitCreateOrConnectWithoutGoalsInput";
import { HabitCreateWithoutGoalsInput } from "../inputs/HabitCreateWithoutGoalsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutGoalsInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutGoalsInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutGoalsInput, { nullable: true })
  create?: HabitCreateWithoutGoalsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutGoalsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutGoalsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
