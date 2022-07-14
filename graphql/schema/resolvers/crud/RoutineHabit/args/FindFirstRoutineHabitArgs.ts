import * as TypeGraphQL from "type-graphql";
import { RoutineHabitScalarFieldEnum } from "../../../../enums/RoutineHabitScalarFieldEnum";
import { RoutineHabitOrderByWithRelationInput } from "../../../inputs/RoutineHabitOrderByWithRelationInput";
import { RoutineHabitWhereInput } from "../../../inputs/RoutineHabitWhereInput";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  where?: RoutineHabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: RoutineHabitOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, {
    nullable: true,
  })
  cursor?: RoutineHabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitScalarFieldEnum], {
    nullable: true,
  })
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
