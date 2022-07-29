import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutGoalsInput } from "../inputs/HabitCreateOrConnectWithoutGoalsInput";
import { HabitCreateWithoutGoalsInput } from "../inputs/HabitCreateWithoutGoalsInput";
import { HabitUpdateWithoutGoalsInput } from "../inputs/HabitUpdateWithoutGoalsInput";
import { HabitUpsertWithoutGoalsInput } from "../inputs/HabitUpsertWithoutGoalsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutGoalsInput", {
  isAbstract: true,
})
export class HabitUpdateOneRequiredWithoutGoalsInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutGoalsInput, { nullable: true })
  create?: HabitCreateWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutGoalsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutGoalsInput, { nullable: true })
  upsert?: HabitUpsertWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutGoalsInput, { nullable: true })
  update?: HabitUpdateWithoutGoalsInput | undefined;
}
