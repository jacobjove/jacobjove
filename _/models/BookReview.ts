import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../models/Book";
import { Reading } from "../models/Reading";
import { User } from "../models/User";
import { DateTimeScalar, ObjectIdScalar } from "../scalars";

@TypeGraphQL.ObjectType("BookReview", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class BookReview extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  review!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  rating!: number;

  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  bookId!: string;

  user?: User;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  reading?: Reading | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  readingId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const BookReviewModel = getModelForClass<typeof BookReview>(BookReview);
export default BookReviewModel;
