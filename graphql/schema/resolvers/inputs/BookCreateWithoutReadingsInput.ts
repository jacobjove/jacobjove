import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ExtraBookData } from "../../models/Book";
import { DateTimeScalar } from "../../scalars";
import { AuthorshipCreateNestedManyWithoutBookInput } from "../inputs/AuthorshipCreateNestedManyWithoutBookInput";
import { BookCreateauthorNamesInput } from "../inputs/BookCreateauthorNamesInput";
import { BookCreateauthorNamesLfInput } from "../inputs/BookCreateauthorNamesLfInput";
import { BookReviewCreateNestedManyWithoutBookInput } from "../inputs/BookReviewCreateNestedManyWithoutBookInput";
import { ShelvingCreateNestedManyWithoutBookInput } from "../inputs/ShelvingCreateNestedManyWithoutBookInput";

@TypeGraphQL.InputType("BookCreateWithoutReadingsInput", {
  isAbstract: true,
})
export class BookCreateWithoutReadingsInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn13?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear?: number | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  extra!: ExtraBookData;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookCreateauthorNamesInput, { nullable: true })
  authorNames?: BookCreateauthorNamesInput | undefined;

  @TypeGraphQL.Field(() => BookCreateauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookCreateauthorNamesLfInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipCreateNestedManyWithoutBookInput, { nullable: true })
  authorships?: AuthorshipCreateNestedManyWithoutBookInput | undefined;

  @TypeGraphQL.Field(() => ShelvingCreateNestedManyWithoutBookInput, { nullable: true })
  shelvings?: ShelvingCreateNestedManyWithoutBookInput | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateNestedManyWithoutBookInput, { nullable: true })
  BookReview?: BookReviewCreateNestedManyWithoutBookInput | undefined;
}
