import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitScalarFieldEnum } from "../../../../enums/RoutineHabitScalarFieldEnum";
import { RoutineHabitOrderByWithRelationInput } from "../../../inputs/RoutineHabitOrderByWithRelationInput";
import { RoutineHabitWhereInput } from "../../../inputs/RoutineHabitWhereInput";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class RoutineHabitsArgs {
  @TypeGraphQL.Field(() => RoutineHabitWhereInput, { nullable: true })
  where?: RoutineHabitWhereInput | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitOrderByWithRelationInput], { nullable: true })
  orderBy?: RoutineHabitOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: true })
  cursor?: RoutineHabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "routineId"
        | "habitId"
        | "position"
        | "durationInMinutes"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
