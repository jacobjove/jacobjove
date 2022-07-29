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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  scopes!: string[] | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accessToken!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  refreshToken!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  accessTokenExpiry!: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => AccountCountAggregate, { nullable: true })
  _count!: AccountCountAggregate | null;

  @TypeGraphQL.Field(() => AccountAvgAggregate, { nullable: true })
  _avg!: AccountAvgAggregate | null;

  @TypeGraphQL.Field(() => AccountSumAggregate, { nullable: true })
  _sum!: AccountSumAggregate | null;

  @TypeGraphQL.Field(() => AccountMinAggregate, { nullable: true })
  _min!: AccountMinAggregate | null;

  @TypeGraphQL.Field(() => AccountMaxAggregate, { nullable: true })
  _max!: AccountMaxAggregate | null;
}
