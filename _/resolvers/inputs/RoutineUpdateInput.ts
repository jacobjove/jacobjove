import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitUpdateManyWithoutRoutineInput } from "../inputs/RoutineHabitUpdateManyWithoutRoutineInput";

@TypeGraphQL.InputType("RoutineUpdateInput", { isAbstract: true })
export class RoutineUpdateInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => RoutineHabitUpdateManyWithoutRoutineInput, { nullable: true })
  habits?: RoutineHabitUpdateManyWithoutRoutineInput | undefined;
}
