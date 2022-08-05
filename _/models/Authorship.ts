import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../models/Author";
import { Book } from "../models/Book";
import { DateTimeScalar } from "../scalars";

@TypeGraphQL.ObjectType("Authorship", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Authorship extends Model {
  author?: Author;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  authorId!: string;

  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  bookId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  position!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const AuthorshipModel = getModelForClass<typeof Authorship>(Authorship);
export default AuthorshipModel;
