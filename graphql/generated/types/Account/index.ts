/* Do not edit this file. It was generated programmatically. */

import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { DateTimeScalar, ObjectIdScalar } from "@/graphql/schema/scalars";
import { Model } from "@/graphql/schema/types";
import { ModelOptions, post, pre, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { postSave, postUpdate, preSave } from "./hooks";

@TypeGraphQL.ObjectType()
@ModelOptions(DEFAULT_MODEL_OPTIONS)
@pre<Account>("save", preSave)
@post<Account>("save", postSave)
@post<Account>("findOneAndUpdate", postUpdate)
export default class Account extends Model {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ type: () => String, required: true })
  provider!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ type: () => String, required: true, unique: true })
  remoteId!: string;

  @TypeGraphQL.Field(() => [String], { nullable: false })
  @Property({ required: true })
  scopes!: string[];

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ type: () => String, required: false, default: null })
  accessToken?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ type: () => String, required: false, default: null })
  refreshToken?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false, default: null })
  accessTokenExpiry?: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ type: () => String, required: false, default: null })
  syncToken?: string | null;
}
