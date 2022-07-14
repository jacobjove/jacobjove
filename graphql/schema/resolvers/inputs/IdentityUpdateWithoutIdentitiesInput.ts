import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationUpdateManyMutationInput } from "../inputs/IdentityActRelationUpdateManyMutationInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IdentityUpdateWithoutIdentitiesInput", {
  isAbstract: true,
})
export class IdentityUpdateWithoutIdentitiesInput {
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

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateManyMutationInput, {
    nullable: true,
  })
  actionRelations?: IdentityActRelationUpdateManyMutationInput | undefined;
}
