import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ReadingAvgOrderByAggregateInput } from "../inputs/ReadingAvgOrderByAggregateInput";
import { ReadingCountOrderByAggregateInput } from "../inputs/ReadingCountOrderByAggregateInput";
import { ReadingMaxOrderByAggregateInput } from "../inputs/ReadingMaxOrderByAggregateInput";
import { ReadingMinOrderByAggregateInput } from "../inputs/ReadingMinOrderByAggregateInput";
import { ReadingSumOrderByAggregateInput } from "../inputs/ReadingSumOrderByAggregateInput";

@TypeGraphQL.InputType("ReadingOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ReadingOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  dateStarted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  dateFinished?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ReadingCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ReadingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ReadingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ReadingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ReadingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ReadingSumOrderByAggregateInput | undefined;
}
