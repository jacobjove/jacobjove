import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { RoutineOrderByWithRelationInput } from "../inputs/RoutineOrderByWithRelationInput";

@TypeGraphQL.InputType("RoutineHabitOrderByWithRelationInput", {
  isAbstract: true,
})
export class RoutineHabitOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => RoutineOrderByWithRelationInput, {
    nullable: true,
  })
  routine?: RoutineOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  routineId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => HabitOrderByWithRelationInput, {
    nullable: true,
  })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  durationInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;
}
