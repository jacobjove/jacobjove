import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutTasksInput } from "../inputs/HabitCreateOrConnectWithoutTasksInput";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutTasksInput", { isAbstract: true })
export class HabitCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutTasksInput, { nullable: true })
  create?: HabitCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
