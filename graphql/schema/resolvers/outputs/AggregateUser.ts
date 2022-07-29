import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";

@TypeGraphQL.ObjectType("AggregateUser", {
  isAbstract: true,
})
export class AggregateUser {
  @TypeGraphQL.Field(() => UserCountAggregate, { nullable: true })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(() => UserAvgAggregate, { nullable: true })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field(() => UserSumAggregate, { nullable: true })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field(() => UserMinAggregate, { nullable: true })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(() => UserMaxAggregate, { nullable: true })
  _max!: UserMaxAggregate | null;
}
