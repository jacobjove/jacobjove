import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutIdentityRelationsInput } from "../inputs/ActUpdateOneRequiredWithoutIdentityRelationsInput";
import { IdentityUpdateOneRequiredWithoutActionRelationsInput } from "../inputs/IdentityUpdateOneRequiredWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateInput", { isAbstract: true })
export class IdentityActRelationUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => IdentityUpdateOneRequiredWithoutActionRelationsInput, {
    nullable: true,
  })
  identity?: IdentityUpdateOneRequiredWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutIdentityRelationsInput, {
    nullable: true,
  })
  action?: ActUpdateOneRequiredWithoutIdentityRelationsInput | undefined;
}
