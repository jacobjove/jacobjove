import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { Book } from "./Book";
import { BookReview } from "./BookReview";
import { User } from "./User";

@TypeGraphQL.ObjectType("Reading", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Reading extends Model {
  user?: User;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  bookId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  dateStarted?: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  dateFinished?: Date | null;

  review?: BookReview | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const ReadingModel = getModelForClass<typeof Reading>(Reading);
export default ReadingModel;
