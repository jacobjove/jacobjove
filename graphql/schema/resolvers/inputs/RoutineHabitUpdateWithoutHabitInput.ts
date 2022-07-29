import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RoutineUpdateOneRequiredWithoutHabitsInput } from "../inputs/RoutineUpdateOneRequiredWithoutHabitsInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  durationInMinutes?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => RoutineUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  routine?: RoutineUpdateOneRequiredWithoutHabitsInput | undefined;
}
