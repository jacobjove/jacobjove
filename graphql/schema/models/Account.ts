import * as TypeGraphQL from "type-graphql-v2-fork";
import { Calendar } from "../models/Calendar";
import { User } from "../models/User";
import { AccountCount } from "../resolvers/outputs/AccountCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Account", {
  isAbstract: true,
})
export class Account extends Model {
  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => [String], { nullable: false })
  scopes!: string[];

  @TypeGraphQL.Field(() => String, { nullable: true })
  accessToken?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  refreshToken?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  accessTokenExpiry?: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  calendars?: Calendar[];

  @TypeGraphQL.Field(() => AccountCount, { nullable: true })
  _count?: AccountCount | null;
}
