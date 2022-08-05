import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookAvgAggregate", { isAbstract: true })
export class BookAvgAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  publicationYear!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  originalPublicationYear!: number | null;
}
