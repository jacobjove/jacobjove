import * as TypeGraphQL from "type-graphql";
import { ActUpdateOneRequiredWithoutIdentityRelationsInput } from "../inputs/ActUpdateOneRequiredWithoutIdentityRelationsInput";
import { IdentityUpdateOneRequiredWithoutActionRelationsInput } from "../inputs/IdentityUpdateOneRequiredWithoutActionRelationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateOneRequiredWithoutActionRelationsInput, {
    nullable: true,
  })
  identity?: IdentityUpdateOneRequiredWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutIdentityRelationsInput, {
    nullable: true,
  })
  action?: ActUpdateOneRequiredWithoutIdentityRelationsInput | undefined;
}
