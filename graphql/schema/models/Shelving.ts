import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../models/Book";
import { Bookshelf } from "../models/Bookshelf";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Shelving", {
  isAbstract: true,
})
export class Shelving extends Model {
  book?: Book;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;

  shelf?: Bookshelf;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  rationale?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
