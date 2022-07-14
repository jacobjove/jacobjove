import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ListOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class ListOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  _count?: "asc" | "desc" | undefined;
}
