import * as TypeGraphQL from "type-graphql";
import { IdentityUpdateOneRequiredWithoutActionRelationsInput } from "../inputs/IdentityUpdateOneRequiredWithoutActionRelationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateWithoutActionInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateOneRequiredWithoutActionRelationsInput, {
    nullable: true,
  })
  identity?: IdentityUpdateOneRequiredWithoutActionRelationsInput | undefined;
}
