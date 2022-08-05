import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutActionsInput } from "../inputs/HabitCreateOrConnectWithoutActionsInput";
import { HabitCreateWithoutActionsInput } from "../inputs/HabitCreateWithoutActionsInput";
import { HabitUpdateWithoutActionsInput } from "../inputs/HabitUpdateWithoutActionsInput";
import { HabitUpsertWithoutActionsInput } from "../inputs/HabitUpsertWithoutActionsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneWithoutActionsInput", { isAbstract: true })
export class HabitUpdateOneWithoutActionsInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutActionsInput, { nullable: true })
  create?: HabitCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutActionsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutActionsInput, { nullable: true })
  upsert?: HabitUpsertWithoutActionsInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutActionsInput, { nullable: true })
  update?: HabitUpdateWithoutActionsInput | undefined;
}
