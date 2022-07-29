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
  @TypeGraphQL.Field(() => String, { nullable: false })
  review!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rating!: number;

  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  reading?: Reading | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  readingId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
