import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutSchedulesInput } from "../inputs/HabitCreateOrConnectWithoutSchedulesInput";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutSchedulesInput", { isAbstract: true })
export class HabitCreateNestedOneWithoutSchedulesInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutSchedulesInput, { nullable: true })
  create?: HabitCreateWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutSchedulesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
