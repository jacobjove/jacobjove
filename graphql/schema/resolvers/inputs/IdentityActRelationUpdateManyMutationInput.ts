import * as TypeGraphQL from "type-graphql";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyMutationInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
