import * as TypeGraphQL from "type-graphql";
import { Book } from "../models/Book";
import { BookReview } from "../models/BookReview";
import { User } from "../models/User";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Reading", {
  isAbstract: true,
})
export class Reading extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  book?: Book;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  bookId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateStarted?: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateFinished?: Date | null;

  review?: BookReview | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;
}
