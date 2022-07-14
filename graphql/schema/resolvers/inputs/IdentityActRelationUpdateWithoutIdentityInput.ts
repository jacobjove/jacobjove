import * as TypeGraphQL from "type-graphql";
import { ActUpdateOneRequiredWithoutIdentityRelationsInput } from "../inputs/ActUpdateOneRequiredWithoutIdentityRelationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutIdentityRelationsInput, {
    nullable: true,
  })
  action?: ActUpdateOneRequiredWithoutIdentityRelationsInput | undefined;
}
