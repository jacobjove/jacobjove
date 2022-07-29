import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutIdentityRelationsInput } from "../inputs/ActUpdateOneRequiredWithoutIdentityRelationsInput";
import { IdentityUpdateOneRequiredWithoutActionRelationsInput } from "../inputs/IdentityUpdateOneRequiredWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateOneRequiredWithoutActionRelationsInput, {
    nullable: true,
  })
  identity?: IdentityUpdateOneRequiredWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutIdentityRelationsInput, {
    nullable: true,
  })
  action?: ActUpdateOneRequiredWithoutIdentityRelationsInput | undefined;
}
