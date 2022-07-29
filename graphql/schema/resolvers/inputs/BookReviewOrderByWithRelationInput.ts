import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { ReadingOrderByWithRelationInput } from "../inputs/ReadingOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@TypeGraphQL.InputType("BookReviewOrderByWithRelationInput", {
  isAbstract: true,
})
export class BookReviewOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  review?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ReadingOrderByWithRelationInput, { nullable: true })
  reading?: ReadingOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  readingId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
