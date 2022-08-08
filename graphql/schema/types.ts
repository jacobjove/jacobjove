import * as Scalars from "@/graphql/schema/scalars";
import { PaletteMode } from "@mui/material";
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

export interface UserSettings {
  colorMode?: PaletteMode;
  defaultCalendarId?: ID;
}

@ObjectType({ isAbstract: true })
export class Model {
  readonly __typename?: string;

  @Field(() => Scalars.ObjectId, { nullable: false })
  readonly _id!: ObjectId;

  @Field(() => Scalars.ObjectId, { nullable: false })
  readonly id!: ID;

  @Field(() => Scalars.DateTime, { nullable: false })
  createdAt!: Date;

  @Field(() => Scalars.DateTime, { nullable: false })
  updatedAt!: Date;

  @Field(() => Scalars.DateTime, { nullable: true })
  @Property({ type: () => Date, required: false, default: null })
  archivedAt?: Date | null;
}

@InputType()
export class WhereInput {
  @Field(() => Scalars.DateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Scalars.DateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class WhereUniqueInput {
  @Field(() => Scalars.ObjectIdScalar, { nullable: true })
  id?: ID | undefined;
}
