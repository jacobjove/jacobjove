import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BeliefOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class BeliefOrderByRelationAggregateInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
