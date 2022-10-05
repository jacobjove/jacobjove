import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import { Field, InputType, ObjectType } from "type-graphql-v2-fork";

export type ID = string;

export const DEFAULT_SCHEMA_OPTIONS = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  minimize: false, // https://mongoosejs.com/docs/guide.html#minimize
} as const;

@ObjectType()
export class Model {
  @Field(() => ObjectIdScalar, { nullable: false })
  readonly _id!: ObjectId;

  @Field(() => ObjectIdScalar, { nullable: false })
  readonly id!: string;

  @Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @Field(() => DateTimeScalar, { nullable: true })
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
  id?: string | undefined;
}

export type FragmentBase = {
  __typename: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Fragment<T extends Model> = FragmentBase & Partial<Omit<T, "_id" | "id">>;
