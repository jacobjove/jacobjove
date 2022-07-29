import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutRoutinesInput } from "../inputs/HabitCreateOrConnectWithoutRoutinesInput";
import { HabitCreateWithoutRoutinesInput } from "../inputs/HabitCreateWithoutRoutinesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutRoutinesInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutRoutinesInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutRoutinesInput, { nullable: true })
  create?: HabitCreateWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutRoutinesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
