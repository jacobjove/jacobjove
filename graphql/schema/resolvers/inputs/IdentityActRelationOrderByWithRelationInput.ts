import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { IdentityOrderByWithRelationInput } from "../inputs/IdentityOrderByWithRelationInput";

@TypeGraphQL.InputType("IdentityActRelationOrderByWithRelationInput", {
  isAbstract: true,
})
export class IdentityActRelationOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => IdentityOrderByWithRelationInput, {
    nullable: true,
  })
  identity?: IdentityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  identityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActOrderByWithRelationInput, {
    nullable: true,
  })
  action?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  actionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;
}
