import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneRequiredWithoutRoutinesInput } from "../inputs/HabitUpdateOneRequiredWithoutRoutinesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateWithoutRoutineInput {
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

  @TypeGraphQL.Field((_type) => HabitUpdateOneRequiredWithoutRoutinesInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutRoutinesInput | undefined;
}
