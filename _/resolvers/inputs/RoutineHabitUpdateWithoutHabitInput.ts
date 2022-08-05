import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineUpdateOneRequiredWithoutHabitsInput } from "../inputs/RoutineUpdateOneRequiredWithoutHabitsInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithoutHabitInput", { isAbstract: true })
export class RoutineHabitUpdateWithoutHabitInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => RoutineUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  routine?: RoutineUpdateOneRequiredWithoutHabitsInput | undefined;
}
