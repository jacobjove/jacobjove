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
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  notebookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => NoteCountOrderByAggregateInput, { nullable: true })
  _count?: NoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NoteAvgOrderByAggregateInput, { nullable: true })
  _avg?: NoteAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NoteMaxOrderByAggregateInput, { nullable: true })
  _max?: NoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NoteMinOrderByAggregateInput, { nullable: true })
  _min?: NoteMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NoteSumOrderByAggregateInput, { nullable: true })
  _sum?: NoteSumOrderByAggregateInput | undefined;
}
