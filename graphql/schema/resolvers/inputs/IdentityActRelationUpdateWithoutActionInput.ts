import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityUpdateOneRequiredWithoutActionRelationsInput } from "../inputs/IdentityUpdateOneRequiredWithoutActionRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateWithoutActionInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => IdentityUpdateOneRequiredWithoutActionRelationsInput, {
    nullable: true,
  })
  identity?: IdentityUpdateOneRequiredWithoutActionRelationsInput | undefined;
}
