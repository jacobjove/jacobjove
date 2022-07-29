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
  @TypeGraphQL.Field((_type) => RedirectCountAggregate, { nullable: true })
  _count!: RedirectCountAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectAvgAggregate, { nullable: true })
  _avg!: RedirectAvgAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectSumAggregate, { nullable: true })
  _sum!: RedirectSumAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectMinAggregate, { nullable: true })
  _min!: RedirectMinAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectMaxAggregate, { nullable: true })
  _max!: RedirectMaxAggregate | null;
}
