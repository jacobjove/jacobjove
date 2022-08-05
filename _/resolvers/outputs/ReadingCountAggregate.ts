import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("ReadingCountAggregate", { isAbstract: true })
export class ReadingCountAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  _id!: ObjectId;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  dateStarted!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  dateFinished!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
