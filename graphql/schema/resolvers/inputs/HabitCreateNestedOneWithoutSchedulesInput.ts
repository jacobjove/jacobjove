import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutSchedulesInput } from "../inputs/HabitCreateOrConnectWithoutSchedulesInput";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutSchedulesInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutSchedulesInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutSchedulesInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutSchedulesInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;
}
