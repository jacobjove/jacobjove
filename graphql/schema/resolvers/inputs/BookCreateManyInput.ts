import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ExtraBookData } from "../../models/Book";
import { DateTimeScalar } from "../../scalars";
import { BookCreateManyauthorNamesInput } from "../inputs/BookCreateManyauthorNamesInput";
import { BookCreateManyauthorNamesLfInput } from "../inputs/BookCreateManyauthorNamesLfInput";

@TypeGraphQL.InputType("BookCreateManyInput", {
  isAbstract: true,
})
export class BookCreateManyInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

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

  @TypeGraphQL.Field((_type) => BookCreateManyauthorNamesInput, { nullable: true })
  authorNames?: BookCreateManyauthorNamesInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateManyauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookCreateManyauthorNamesLfInput | undefined;
}
