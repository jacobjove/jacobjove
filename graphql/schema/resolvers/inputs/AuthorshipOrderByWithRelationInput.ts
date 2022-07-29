import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorOrderByWithRelationInput } from "../inputs/AuthorOrderByWithRelationInput";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";

@TypeGraphQL.InputType("AuthorshipOrderByWithRelationInput", {
  isAbstract: true,
})
export class AuthorshipOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => AuthorOrderByWithRelationInput, { nullable: true })
  author?: AuthorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
