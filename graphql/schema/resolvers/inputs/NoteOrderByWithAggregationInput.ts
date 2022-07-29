import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { NoteAvgOrderByAggregateInput } from "../inputs/NoteAvgOrderByAggregateInput";
import { NoteCountOrderByAggregateInput } from "../inputs/NoteCountOrderByAggregateInput";
import { NoteMaxOrderByAggregateInput } from "../inputs/NoteMaxOrderByAggregateInput";
import { NoteMinOrderByAggregateInput } from "../inputs/NoteMinOrderByAggregateInput";
import { NoteSumOrderByAggregateInput } from "../inputs/NoteSumOrderByAggregateInput";

@TypeGraphQL.InputType("NoteOrderByWithAggregationInput", {
  isAbstract: true,
})
export class NoteOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  notebookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => NoteCountOrderByAggregateInput, { nullable: true })
  _count?: NoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NoteAvgOrderByAggregateInput, { nullable: true })
  _avg?: NoteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NoteMaxOrderByAggregateInput, { nullable: true })
  _max?: NoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NoteMinOrderByAggregateInput, { nullable: true })
  _min?: NoteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NoteSumOrderByAggregateInput, { nullable: true })
  _sum?: NoteSumOrderByAggregateInput | undefined;
}
