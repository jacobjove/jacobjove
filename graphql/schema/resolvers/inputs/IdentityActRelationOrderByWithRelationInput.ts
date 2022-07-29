import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { IdentityOrderByWithRelationInput } from "../inputs/IdentityOrderByWithRelationInput";

@TypeGraphQL.InputType("IdentityActRelationOrderByWithRelationInput", {
  isAbstract: true,
})
export class IdentityActRelationOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => IdentityOrderByWithRelationInput, { nullable: true })
  identity?: IdentityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  identityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActOrderByWithRelationInput, { nullable: true })
  action?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
