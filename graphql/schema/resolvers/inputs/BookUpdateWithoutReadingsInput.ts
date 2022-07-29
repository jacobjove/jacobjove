import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ExtraBookData } from "../../models/Book";
import { AuthorshipUpdateManyWithoutBookInput } from "../inputs/AuthorshipUpdateManyWithoutBookInput";
import { BookReviewUpdateManyWithoutBookInput } from "../inputs/BookReviewUpdateManyWithoutBookInput";
import { BookUpdateauthorNamesInput } from "../inputs/BookUpdateauthorNamesInput";
import { BookUpdateauthorNamesLfInput } from "../inputs/BookUpdateauthorNamesLfInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { ShelvingUpdateManyWithoutBookInput } from "../inputs/ShelvingUpdateManyWithoutBookInput";

@TypeGraphQL.InputType("BookUpdateWithoutReadingsInput", {
  isAbstract: true,
})
export class BookUpdateWithoutReadingsInput {
  @TypeGraphQL.Field({ nullable: true })
  isbn?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  isbn13?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, { nullable: true })
  publicationYear?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, { nullable: true })
  originalPublicationYear?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  extra?: ExtraBookData | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateauthorNamesInput, { nullable: true })
  authorNames?: BookUpdateauthorNamesInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookUpdateauthorNamesLfInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateManyWithoutBookInput, { nullable: true })
  authorships?: AuthorshipUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field((_type) => ShelvingUpdateManyWithoutBookInput, { nullable: true })
  shelvings?: ShelvingUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateManyWithoutBookInput, { nullable: true })
  BookReview?: BookReviewUpdateManyWithoutBookInput | undefined;
}
