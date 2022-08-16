import { DateTimeScalar, ObjectIdScalar } from "@/graphql/schema/scalars";
import { prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, InputType, ObjectType } from "type-graphql-v2-fork";

export type ID = string;

export type String = string;
export type NullableString = string | null;

export type Boolean = boolean;
export type NullableBoolean = boolean | null;

export type Number = number;
export type NullableNumber = number | null;

export type DateTime = Date;
export type NullableDateTime = DateTime | null;

export type Map = Record<string, unknown>;

@ObjectType({ isAbstract: true })
export class Model {
  // declare readonly __types__: {
  //   fragment: Fragment;
  //   // mutationArgs: {
  //   //   create: unknown;
  //   // }
  //   mutationResponses: {
  //     create: { [key: string]: Fragment };
  //     update: { [key: string]: Fragment };
  //     upsert: { [key: string]: Fragment };
  //     delete: { [key: string]: Fragment };
  //   }
  // };

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

// export type Fragment<T extends Model = Model> = T["__types__"]["fragment"];

export type Fragment = Pick<Model, "__typename" | "id" | "createdAt" | "updatedAt" | "archivedAt"> &
  Record<string, unknown>;
