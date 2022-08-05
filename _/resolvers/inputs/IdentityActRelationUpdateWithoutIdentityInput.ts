import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutIdentityRelationsInput } from "../inputs/ActUpdateOneRequiredWithoutIdentityRelationsInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateInput", { isAbstract: true })
export class IdentityActRelationUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutIdentityRelationsInput, {
    nullable: true,
  })
  action?: ActUpdateOneRequiredWithoutIdentityRelationsInput | undefined;
}
