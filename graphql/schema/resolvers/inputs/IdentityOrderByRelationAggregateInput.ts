import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IdentityOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class IdentityOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  _count?: "asc" | "desc" | undefined;
}
