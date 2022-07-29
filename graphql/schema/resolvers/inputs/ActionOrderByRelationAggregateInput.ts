import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActionOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class ActionOrderByRelationAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
