import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { BookshelfOrderByWithRelationInput } from "../inputs/BookshelfOrderByWithRelationInput";

@TypeGraphQL.InputType("ShelvingOrderByWithRelationInput", {
  isAbstract: true,
})
export class ShelvingOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => BookOrderByWithRelationInput, {
    nullable: true,
  })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => BookshelfOrderByWithRelationInput, {
    nullable: true,
  })
  shelf?: BookshelfOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  shelfId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  rationale?: "asc" | "desc" | undefined;

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
