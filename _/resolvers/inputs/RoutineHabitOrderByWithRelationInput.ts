import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { RoutineOrderByWithRelationInput } from "../inputs/RoutineOrderByWithRelationInput";

@TypeGraphQL.InputType("RoutineHabitOrderByWithRelationInput", { isAbstract: true })
export class RoutineHabitOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => RoutineOrderByWithRelationInput, { nullable: true })
  routine?: RoutineOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  routineId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => HabitOrderByWithRelationInput, { nullable: true })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  durationInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
