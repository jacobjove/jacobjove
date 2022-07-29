import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { IdentityActRelationOrderByRelationAggregateInput } from "../inputs/IdentityActRelationOrderByRelationAggregateInput";
import { IdentityOrderByRelationAggregateInput } from "../inputs/IdentityOrderByRelationAggregateInput";

@TypeGraphQL.InputType("IdentityOrderByWithRelationInput", {
  isAbstract: true,
})
export class IdentityOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => IdentityOrderByRelationAggregateInput, { nullable: true })
  identities?: IdentityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationOrderByRelationAggregateInput, {
    nullable: true,
  })
  actionRelations?: IdentityActRelationOrderByRelationAggregateInput | undefined;
}
