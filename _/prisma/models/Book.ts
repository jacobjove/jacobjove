import { Model } from "@/graphql/schema/types";
import { prop as Property } from "@typegoose/typegoose";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Authorship } from "./Authorship";
import { BookReview } from "./BookReview";
import { Reading } from "./Reading";
import { Shelving } from "./Shelving";

export type ExtraBookData = Record<string, string>;

@TypeGraphQL.ObjectType("Book", { isAbstract: true })
export class Book extends Model {
  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  isbn?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  isbn13?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  description?: string | null;

  @TypeGraphQL.Field(() => [String], { nullable: false })
  @Property({ required: true })
  authorNames!: string[];

  @TypeGraphQL.Field(() => [String], { nullable: false })
  @Property({ required: true })
  authorNamesLf!: string[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  @Property({ required: false })
  publicationYear?: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  @Property({ required: false })
  originalPublicationYear?: number | null;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  @Property({ required: true })
  extra!: Record<string, string>;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;

  authorships?: Authorship[];

  readings?: Reading[];

  shelvings?: Shelving[];

  BookReview?: BookReview[];
}
