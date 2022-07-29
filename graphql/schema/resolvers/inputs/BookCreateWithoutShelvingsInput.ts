import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ExtraBookData } from "../../models/Book";
import { DateTimeScalar } from "../../scalars";
import { AuthorshipCreateNestedManyWithoutBookInput } from "../inputs/AuthorshipCreateNestedManyWithoutBookInput";
import { BookCreateauthorNamesInput } from "../inputs/BookCreateauthorNamesInput";
import { BookCreateauthorNamesLfInput } from "../inputs/BookCreateauthorNamesLfInput";
import { BookReviewCreateNestedManyWithoutBookInput } from "../inputs/BookReviewCreateNestedManyWithoutBookInput";
import { ReadingCreateNestedManyWithoutBookInput } from "../inputs/ReadingCreateNestedManyWithoutBookInput";

@TypeGraphQL.InputType("BookCreateWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookCreateWithoutShelvingsInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  isbn?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  isbn13?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  publicationYear?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear?: number | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  extra!: ExtraBookData;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookCreateauthorNamesInput, { nullable: true })
  authorNames?: BookCreateauthorNamesInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookCreateauthorNamesLfInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCreateNestedManyWithoutBookInput, { nullable: true })
  authorships?: AuthorshipCreateNestedManyWithoutBookInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingCreateNestedManyWithoutBookInput, { nullable: true })
  readings?: ReadingCreateNestedManyWithoutBookInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateNestedManyWithoutBookInput, { nullable: true })
  BookReview?: BookReviewCreateNestedManyWithoutBookInput | undefined;
}
