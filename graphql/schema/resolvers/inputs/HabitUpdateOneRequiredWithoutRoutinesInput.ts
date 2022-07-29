import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutRoutinesInput } from "../inputs/HabitCreateOrConnectWithoutRoutinesInput";
import { HabitCreateWithoutRoutinesInput } from "../inputs/HabitCreateWithoutRoutinesInput";
import { HabitUpdateWithoutRoutinesInput } from "../inputs/HabitUpdateWithoutRoutinesInput";
import { HabitUpsertWithoutRoutinesInput } from "../inputs/HabitUpsertWithoutRoutinesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutRoutinesInput", {
  isAbstract: true,
})
export class HabitUpdateOneRequiredWithoutRoutinesInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutRoutinesInput, { nullable: true })
  create?: HabitCreateWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutRoutinesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpsertWithoutRoutinesInput, { nullable: true })
  upsert?: HabitUpsertWithoutRoutinesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutRoutinesInput, { nullable: true })
  update?: HabitUpdateWithoutRoutinesInput | undefined;
}
