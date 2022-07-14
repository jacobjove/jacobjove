import * as TypeGraphQL from "type-graphql";
import { IdentityUpdateManyMutationInput } from "../inputs/IdentityUpdateManyMutationInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IdentityUpdateWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityUpdateWithoutActionRelationsInput {
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

  @TypeGraphQL.Field((_type) => IdentityUpdateManyMutationInput, {
    nullable: true,
  })
  identities?: IdentityUpdateManyMutationInput | undefined;
}
