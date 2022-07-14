import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateUpdateManyWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutActInput";
import { ActUpdateManyWithoutParentInput } from "../inputs/ActUpdateManyWithoutParentInput";
import { ActUpdateOneWithoutVariantsInput } from "../inputs/ActUpdateOneWithoutVariantsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategorizationUpdateManyWithoutActInput } from "../inputs/CategorizationUpdateManyWithoutActInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { HabitUpdateManyWithoutActInput } from "../inputs/HabitUpdateManyWithoutActInput";
import { IdentityActRelationUpdateManyWithoutActionInput } from "../inputs/IdentityActRelationUpdateManyWithoutActionInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActUpdateWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActUpdateWithoutMetricApplicationsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneWithoutVariantsInput, {
    nullable: true,
  })
  parent?: ActUpdateOneWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateManyWithoutParentInput, {
    nullable: true,
  })
  variants?: ActUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateManyWithoutActInput, {
    nullable: true,
  })
  habits?: HabitUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateManyWithoutActionInput, {
    nullable: true,
  })
  identityRelations?: IdentityActRelationUpdateManyWithoutActionInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateManyWithoutActInput, {
    nullable: true,
  })
  scheduleTemplates?: ActionScheduleTemplateUpdateManyWithoutActInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationUpdateManyWithoutActInput, {
    nullable: true,
  })
  categorizations?: CategorizationUpdateManyWithoutActInput | undefined;
}
