import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../models/Book";
import { BookReview } from "../models/BookReview";
import { User } from "../models/User";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Reading", {
  isAbstract: true,
})
export class Reading extends Model {
  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateStarted?: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateFinished?: Date | null;

  review?: BookReview | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
