import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActionOrderByRelationAggregateInput", {
  isAbstract: true,
})
export class ActionOrderByRelationAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  _count?: "asc" | "desc" | undefined;
}
