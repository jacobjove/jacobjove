import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { RoutineHabitUpdateManyWithoutRoutineInput } from "../inputs/RoutineHabitUpdateManyWithoutRoutineInput";

@TypeGraphQL.InputType("RoutineUpdateInput", {
  isAbstract: true,
})
export class RoutineUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  userId?: string | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, { nullable: true })
  durationInMinutes?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitUpdateManyWithoutRoutineInput, { nullable: true })
  habits?: RoutineHabitUpdateManyWithoutRoutineInput | undefined;
}
