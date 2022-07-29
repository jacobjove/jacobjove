import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../models/Author";
import { Book } from "../models/Book";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Authorship", {
  isAbstract: true,
})
export class Authorship extends Model {
  author?: Author;

  @TypeGraphQL.Field(() => String, { nullable: false })
  authorId!: string;

  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
