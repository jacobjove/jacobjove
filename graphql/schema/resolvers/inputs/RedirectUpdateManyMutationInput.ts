import * as TypeGraphQL from "type-graphql";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RedirectUpdateManyMutationInput", {
  isAbstract: true,
})
export class RedirectUpdateManyMutationInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  old_path?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  new_path?: StringFieldUpdateOperationsInput | undefined;
}
