import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../models/Book";
import { Reading } from "../models/Reading";
import { User } from "../models/User";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("BookReview", {
  isAbstract: true,
})
export class BookReview extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  review!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  rating!: number;

  book?: Book;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  reading?: Reading | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  readingId?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
