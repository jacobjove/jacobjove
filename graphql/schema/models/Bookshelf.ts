import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../models/Shelving";
import { User } from "../models/User";
import { BookshelfCount } from "../resolvers/outputs/BookshelfCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Bookshelf", {
  isAbstract: true,
})
export class Bookshelf extends Model {
  owner?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null;

  shelvings?: Shelving[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => BookshelfCount, { nullable: true })
  _count?: BookshelfCount | null;
}
