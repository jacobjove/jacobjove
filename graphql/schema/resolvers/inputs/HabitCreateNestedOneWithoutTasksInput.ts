import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutTasksInput } from "../inputs/HabitCreateOrConnectWithoutTasksInput";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutTasksInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutTasksInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutTasksInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;
}
