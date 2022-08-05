import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutSchedulesInput } from "../inputs/HabitCreateOrConnectWithoutSchedulesInput";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitUpdateWithoutSchedulesInput } from "../inputs/HabitUpdateWithoutSchedulesInput";
import { HabitUpsertWithoutSchedulesInput } from "../inputs/HabitUpsertWithoutSchedulesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutSchedulesInput", { isAbstract: true })
export class HabitUpdateOneRequiredWithoutSchedulesInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutSchedulesInput, { nullable: true })
  create?: HabitCreateWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutSchedulesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutSchedulesInput, { nullable: true })
  upsert?: HabitUpsertWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutSchedulesInput, { nullable: true })
  update?: HabitUpdateWithoutSchedulesInput | undefined;
}
