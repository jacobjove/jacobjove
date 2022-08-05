import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("ShelvingSumAggregate", { isAbstract: true })
export class ShelvingSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  shelfId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position!: number | null;
}
