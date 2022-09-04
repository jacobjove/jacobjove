import { prop as Property } from "@typegoose/typegoose";
import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import { Field, InputType, ObjectType } from "type-graphql-v2-fork";

export type ID = string;
export type Map = Record<string, unknown>;

@ObjectType({ isAbstract: true })
export class Model {
  readonly __typename?: string;

  @Field(() => ObjectIdScalar, { nullable: false })
  readonly _id!: ObjectId;

  @Field(() => ObjectIdScalar, { nullable: false })
  readonly id!: ID;

  @Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @Field(() => DateTimeScalar, { nullable: true })
  @Property({ type: () => Date, required: false, default: null })
  archivedAt?: Date | null;
}

@InputType()
export class WhereInput {
  @Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date;

  @Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class WhereUniqueInput {
  @Field(() => ObjectIdScalar, { nullable: true })
  id?: ID | undefined;
}

export type Fragment = Pick<Model, "__typename" | "id" | "createdAt" | "updatedAt" | "archivedAt"> &
  Record<string, unknown>;
