import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";

@TypeGraphQL.ObjectType("AggregateAccount", {
  isAbstract: true,
})
export class AggregateAccount {
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
