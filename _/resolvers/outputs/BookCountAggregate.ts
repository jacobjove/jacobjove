import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookCountAggregate", { isAbstract: true })
export class BookCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  isbn!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  isbn13!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  title!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  slug!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  description!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  authorNames!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  authorNamesLf!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  publicationYear!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  originalPublicationYear!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  extra!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
