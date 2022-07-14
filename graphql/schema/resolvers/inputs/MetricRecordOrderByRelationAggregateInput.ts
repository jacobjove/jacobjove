import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MetricRecordOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class MetricRecordOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  _count?: "asc" | "desc" | undefined;
}
