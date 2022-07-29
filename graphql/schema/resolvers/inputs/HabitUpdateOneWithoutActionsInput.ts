import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutActionsInput } from "../inputs/HabitCreateOrConnectWithoutActionsInput";
import { HabitCreateWithoutActionsInput } from "../inputs/HabitCreateWithoutActionsInput";
import { HabitUpdateWithoutActionsInput } from "../inputs/HabitUpdateWithoutActionsInput";
import { HabitUpsertWithoutActionsInput } from "../inputs/HabitUpsertWithoutActionsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneWithoutActionsInput", {
  isAbstract: true,
})
export class HabitUpdateOneWithoutActionsInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutActionsInput, { nullable: true })
  create?: HabitCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutActionsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpsertWithoutActionsInput, { nullable: true })
  upsert?: HabitUpsertWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutActionsInput, { nullable: true })
  update?: HabitUpdateWithoutActionsInput | undefined;
}
