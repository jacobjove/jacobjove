import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookSumAggregate", { isAbstract: true })
export class BookSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear!: number | null;
}
