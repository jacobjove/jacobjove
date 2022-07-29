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

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  authorId!: string;

  book?: Book;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
