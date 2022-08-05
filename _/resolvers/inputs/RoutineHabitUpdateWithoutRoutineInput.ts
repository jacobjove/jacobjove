import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneRequiredWithoutRoutinesInput } from "../inputs/HabitUpdateOneRequiredWithoutRoutinesInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithoutRoutineInput", { isAbstract: true })
export class RoutineHabitUpdateWithoutRoutineInput {
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

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutRoutinesInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutRoutinesInput | undefined;
}
