import * as TypeGraphQL from "type-graphql";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ScheduleTemplateUpdateManyMutationInput", {
  isAbstract: true,
})
export class ScheduleTemplateUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => EnumFREQUENCYFieldUpdateOperationsInput, {
    nullable: true,
  })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  chron?: NullableStringFieldUpdateOperationsInput | undefined;
}
