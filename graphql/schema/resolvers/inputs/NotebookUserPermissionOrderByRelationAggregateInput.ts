import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NotebookUserPermissionOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class NotebookUserPermissionOrderByRelationAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
