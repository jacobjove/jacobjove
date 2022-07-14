import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../models/Calendar";
import { User } from "../models/User";
import { AccountCount } from "../resolvers/outputs/AccountCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Account", {
  isAbstract: true,
})
export class Account extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  provider!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  scopes!: string[];

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  accessToken?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  refreshToken?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  accessTokenExpiry?: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  syncToken?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  calendars?: Calendar[];

  @TypeGraphQL.Field((_type) => AccountCount, {
    nullable: true,
  })
  _count?: AccountCount | null;
}
