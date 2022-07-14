import * as TypeGraphQL from "type-graphql";

export enum BookReviewScalarFieldEnum {
  id = "id",
  review = "review",
  rating = "rating",
  bookId = "bookId",
  userId = "userId",
  readingId = "readingId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(BookReviewScalarFieldEnum, {
  name: "BookReviewScalarFieldEnum",
  description: undefined,
});
