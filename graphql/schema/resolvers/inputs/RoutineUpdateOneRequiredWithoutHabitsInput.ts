import * as TypeGraphQL from "type-graphql";
import { RoutineCreateOrConnectWithoutHabitsInput } from "../inputs/RoutineCreateOrConnectWithoutHabitsInput";
import { RoutineCreateWithoutHabitsInput } from "../inputs/RoutineCreateWithoutHabitsInput";
import { RoutineUpdateWithoutHabitsInput } from "../inputs/RoutineUpdateWithoutHabitsInput";
import { RoutineUpsertWithoutHabitsInput } from "../inputs/RoutineUpsertWithoutHabitsInput";
import { RoutineWhereUniqueInput } from "../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.InputType("RoutineUpdateOneRequiredWithoutHabitsInput", {
  isAbstract: true,
})
export class RoutineUpdateOneRequiredWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => RoutineCreateWithoutHabitsInput, {
    nullable: true,
  })
  create?: RoutineCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineCreateOrConnectWithoutHabitsInput, {
    nullable: true,
  })
  connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineUpsertWithoutHabitsInput, {
    nullable: true,
  })
  upsert?: RoutineUpsertWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, {
    nullable: true,
  })
  connect?: RoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineUpdateWithoutHabitsInput, {
    nullable: true,
  })
  update?: RoutineUpdateWithoutHabitsInput | undefined;
}
