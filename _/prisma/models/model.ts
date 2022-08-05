import { prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";

@TypeGraphQL.ObjectType({ isAbstract: true })
export class Model {
  readonly __typename?: string;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  readonly _id!: ObjectId;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date;
}
