import * as TypeGraphQL from "type-graphql";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyMutationInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
