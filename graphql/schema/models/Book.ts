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
  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn13?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null;

  @TypeGraphQL.Field(() => [String], { nullable: false })
  authorNames!: string[];

  @TypeGraphQL.Field(() => [String], { nullable: false })
  authorNamesLf!: string[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear?: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear?: number | null;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  extra!: Record<string, string>;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  authorships?: Authorship[];

  readings?: Reading[];

  shelvings?: Shelving[];

  BookReview?: BookReview[];

  @TypeGraphQL.Field(() => BookCount, { nullable: true })
  _count?: BookCount | null;
}
