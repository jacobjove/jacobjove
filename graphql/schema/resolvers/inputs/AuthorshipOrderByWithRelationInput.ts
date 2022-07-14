import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { AuthorOrderByWithRelationInput } from "../inputs/AuthorOrderByWithRelationInput";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";

@TypeGraphQL.InputType("AuthorshipOrderByWithRelationInput", {
  isAbstract: true,
})
export class AuthorshipOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AuthorOrderByWithRelationInput, {
    nullable: true,
  })
  author?: AuthorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => BookOrderByWithRelationInput, {
    nullable: true,
  })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  position?: "asc" | "desc" | undefined;

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
}
