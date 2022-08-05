import { ExtraBookData } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipUpdateManyWithoutBookInput } from "../inputs/AuthorshipUpdateManyWithoutBookInput";
import { BookUpdateauthorNamesInput } from "../inputs/BookUpdateauthorNamesInput";
import { BookUpdateauthorNamesLfInput } from "../inputs/BookUpdateauthorNamesLfInput";
import { ReadingUpdateManyWithoutBookInput } from "../inputs/ReadingUpdateManyWithoutBookInput";
import { ShelvingUpdateManyWithoutBookInput } from "../inputs/ShelvingUpdateManyWithoutBookInput";

@TypeGraphQL.InputType("BookUpdateWithoutBookReviewInput", { isAbstract: true })
export class BookUpdateWithoutBookReviewInput {
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

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear?: number | null | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear?: number | null | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  extra?: ExtraBookData | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookUpdateauthorNamesInput, { nullable: true })
  authorNames?: BookUpdateauthorNamesInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookUpdateauthorNamesLfInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipUpdateManyWithoutBookInput, { nullable: true })
  authorships?: AuthorshipUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field(() => ReadingUpdateManyWithoutBookInput, { nullable: true })
  readings?: ReadingUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field(() => ShelvingUpdateManyWithoutBookInput, { nullable: true })
  shelvings?: ShelvingUpdateManyWithoutBookInput | undefined;
}
