import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectAvgAggregate } from "../outputs/RedirectAvgAggregate";
import { RedirectCountAggregate } from "../outputs/RedirectCountAggregate";
import { RedirectMaxAggregate } from "../outputs/RedirectMaxAggregate";
import { RedirectMinAggregate } from "../outputs/RedirectMinAggregate";
import { RedirectSumAggregate } from "../outputs/RedirectSumAggregate";

@TypeGraphQL.ObjectType("AggregateRedirect", {
  isAbstract: true,
})
export class AggregateRedirect {
  @TypeGraphQL.Field(() => RedirectCountAggregate, { nullable: true })
  _count!: RedirectCountAggregate | null;

  @TypeGraphQL.Field(() => RedirectAvgAggregate, { nullable: true })
  _avg!: RedirectAvgAggregate | null;

  @TypeGraphQL.Field(() => RedirectSumAggregate, { nullable: true })
  _sum!: RedirectSumAggregate | null;

  @TypeGraphQL.Field(() => RedirectMinAggregate, { nullable: true })
  _min!: RedirectMinAggregate | null;

  @TypeGraphQL.Field(() => RedirectMaxAggregate, { nullable: true })
  _max!: RedirectMaxAggregate | null;
}
