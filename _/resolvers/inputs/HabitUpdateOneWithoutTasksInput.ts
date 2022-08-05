import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutTasksInput } from "../inputs/HabitCreateOrConnectWithoutTasksInput";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitUpdateWithoutTasksInput } from "../inputs/HabitUpdateWithoutTasksInput";
import { HabitUpsertWithoutTasksInput } from "../inputs/HabitUpsertWithoutTasksInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneWithoutTasksInput", { isAbstract: true })
export class HabitUpdateOneWithoutTasksInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutTasksInput, { nullable: true })
  create?: HabitCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutTasksInput, { nullable: true })
  upsert?: HabitUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutTasksInput, { nullable: true })
  update?: HabitUpdateWithoutTasksInput | undefined;
}
