import * as TypeGraphQL from "type-graphql";
import { RoutineHabitWhereInput } from "../inputs/RoutineHabitWhereInput";

@TypeGraphQL.InputType("RoutineHabitListRelationFilter", {
  isAbstract: true,
})
export class RoutineHabitListRelationFilter {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  every?: RoutineHabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  some?: RoutineHabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  none?: RoutineHabitWhereInput | undefined;
}
