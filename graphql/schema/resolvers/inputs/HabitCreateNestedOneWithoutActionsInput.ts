import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutActionsInput } from "../inputs/HabitCreateOrConnectWithoutActionsInput";
import { HabitCreateWithoutActionsInput } from "../inputs/HabitCreateWithoutActionsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutActionsInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutActionsInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutActionsInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutActionsInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;
}
