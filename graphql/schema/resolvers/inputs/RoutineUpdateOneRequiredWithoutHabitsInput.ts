import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateOrConnectWithoutHabitsInput } from "../inputs/RoutineCreateOrConnectWithoutHabitsInput";
import { RoutineCreateWithoutHabitsInput } from "../inputs/RoutineCreateWithoutHabitsInput";
import { RoutineUpdateWithoutHabitsInput } from "../inputs/RoutineUpdateWithoutHabitsInput";
import { RoutineUpsertWithoutHabitsInput } from "../inputs/RoutineUpsertWithoutHabitsInput";
import { RoutineWhereUniqueInput } from "../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.InputType("RoutineUpdateOneRequiredWithoutHabitsInput", {
  isAbstract: true,
})
export class RoutineUpdateOneRequiredWithoutHabitsInput {
  @TypeGraphQL.Field(() => RoutineCreateWithoutHabitsInput, { nullable: true })
  create?: RoutineCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => RoutineCreateOrConnectWithoutHabitsInput, { nullable: true })
  connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => RoutineUpsertWithoutHabitsInput, { nullable: true })
  upsert?: RoutineUpsertWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => RoutineWhereUniqueInput, { nullable: true })
  connect?: RoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => RoutineUpdateWithoutHabitsInput, { nullable: true })
  update?: RoutineUpdateWithoutHabitsInput | undefined;
}
