import { ObjectId } from "mongodb";
import { PaletteMode } from "@mui/material";
import { ObjectType, Field } from "type-graphql-v2-fork";
import * as Scalars from "@/graphql/schema/scalars";

export type ID = string;

export type String = string;
export type NullableString = string | null;

export type Boolean = boolean;
export type NullableBoolean = boolean | null;

export type Number = number;
export type NullableNumber = number | null;

export type DateTime = Date;
export type NullableDateTime = DateTime | null;

export type Map = Record<string, string>;

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
}
