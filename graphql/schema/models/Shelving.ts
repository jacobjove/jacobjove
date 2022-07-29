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

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  shelf?: Bookshelf;

  @TypeGraphQL.Field(() => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => String, { nullable: true })
  rationale?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
