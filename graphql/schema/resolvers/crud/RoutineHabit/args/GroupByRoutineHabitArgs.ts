import * as TypeGraphQL from "type-graphql";
import { RoutineHabitScalarFieldEnum } from "../../../../enums/RoutineHabitScalarFieldEnum";
import { RoutineHabitOrderByWithAggregationInput } from "../../../inputs/RoutineHabitOrderByWithAggregationInput";
import { RoutineHabitScalarWhereWithAggregatesInput } from "../../../inputs/RoutineHabitScalarWhereWithAggregatesInput";
import { RoutineHabitWhereInput } from "../../../inputs/RoutineHabitWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  where?: RoutineHabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: RoutineHabitOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "routineId"
    | "habitId"
    | "position"
    | "durationInMinutes"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => RoutineHabitScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: RoutineHabitScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
