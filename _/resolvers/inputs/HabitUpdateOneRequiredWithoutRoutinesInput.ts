import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutRoutinesInput } from "../inputs/HabitCreateOrConnectWithoutRoutinesInput";
import { HabitCreateWithoutRoutinesInput } from "../inputs/HabitCreateWithoutRoutinesInput";
import { HabitUpdateWithoutRoutinesInput } from "../inputs/HabitUpdateWithoutRoutinesInput";
import { HabitUpsertWithoutRoutinesInput } from "../inputs/HabitUpsertWithoutRoutinesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutRoutinesInput", { isAbstract: true })
export class HabitUpdateOneRequiredWithoutRoutinesInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutRoutinesInput, { nullable: true })
  create?: HabitCreateWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutRoutinesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutRoutinesInput, { nullable: true })
  upsert?: HabitUpsertWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutRoutinesInput, { nullable: true })
  update?: HabitUpdateWithoutRoutinesInput | undefined;
}
