import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "../models/Authorship";
import { BookReview } from "../models/BookReview";
import { Reading } from "../models/Reading";
import { Shelving } from "../models/Shelving";
import { BookCount } from "../resolvers/outputs/BookCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

export type ExtraBookData = Record<string, string>;

@TypeGraphQL.ObjectType("Book", {
  isAbstract: true,
})
export class Book extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  isbn?: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  isbn13?: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | null;

  @TypeGraphQL.Field((_type) => [String], { nullable: false })
  authorNames!: string[];

  @TypeGraphQL.Field((_type) => [String], { nullable: false })
  authorNamesLf!: string[];

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  publicationYear?: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear?: number | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  extra!: Record<string, string>;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  authorships?: Authorship[];

  readings?: Reading[];

  shelvings?: Shelving[];

  BookReview?: BookReview[];

  @TypeGraphQL.Field((_type) => BookCount, { nullable: true })
  _count?: BookCount | null;
}
