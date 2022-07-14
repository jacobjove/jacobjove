import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutSchedulesInput } from "../inputs/HabitCreateOrConnectWithoutSchedulesInput";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitUpdateWithoutSchedulesInput } from "../inputs/HabitUpdateWithoutSchedulesInput";
import { HabitUpsertWithoutSchedulesInput } from "../inputs/HabitUpsertWithoutSchedulesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutSchedulesInput", {
  isAbstract: true,
})
export class HabitUpdateOneRequiredWithoutSchedulesInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutSchedulesInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutSchedulesInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpsertWithoutSchedulesInput, {
    nullable: true,
  })
  upsert?: HabitUpsertWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutSchedulesInput, {
    nullable: true,
  })
  update?: HabitUpdateWithoutSchedulesInput | undefined;
}
