import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ShelvingAvgOrderByAggregateInput } from "../inputs/ShelvingAvgOrderByAggregateInput";
import { ShelvingCountOrderByAggregateInput } from "../inputs/ShelvingCountOrderByAggregateInput";
import { ShelvingMaxOrderByAggregateInput } from "../inputs/ShelvingMaxOrderByAggregateInput";
import { ShelvingMinOrderByAggregateInput } from "../inputs/ShelvingMinOrderByAggregateInput";
import { ShelvingSumOrderByAggregateInput } from "../inputs/ShelvingSumOrderByAggregateInput";

@TypeGraphQL.InputType("ShelvingOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ShelvingOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  shelfId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  rationale?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ShelvingCountOrderByAggregateInput, { nullable: true })
  _count?: ShelvingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ShelvingAvgOrderByAggregateInput, { nullable: true })
  _avg?: ShelvingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ShelvingMaxOrderByAggregateInput, { nullable: true })
  _max?: ShelvingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ShelvingMinOrderByAggregateInput, { nullable: true })
  _min?: ShelvingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ShelvingSumOrderByAggregateInput, { nullable: true })
  _sum?: ShelvingSumOrderByAggregateInput | undefined;
}
