import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";

@TypeGraphQL.ObjectType("AccountGroupBy", {
  isAbstract: true,
})
export class AccountGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => [String], { nullable: true })
  scopes!: string[] | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  accessToken!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  refreshToken!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  accessTokenExpiry!: Date | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  syncToken!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => AccountCountAggregate, { nullable: true })
  _count!: AccountCountAggregate | null;

  @TypeGraphQL.Field((_type) => AccountAvgAggregate, { nullable: true })
  _avg!: AccountAvgAggregate | null;

  @TypeGraphQL.Field((_type) => AccountSumAggregate, { nullable: true })
  _sum!: AccountSumAggregate | null;

  @TypeGraphQL.Field((_type) => AccountMinAggregate, { nullable: true })
  _min!: AccountMinAggregate | null;

  @TypeGraphQL.Field((_type) => AccountMaxAggregate, { nullable: true })
  _max!: AccountMaxAggregate | null;
}
