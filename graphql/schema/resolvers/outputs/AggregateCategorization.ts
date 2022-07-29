import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationAvgAggregate } from "../outputs/CategorizationAvgAggregate";
import { CategorizationCountAggregate } from "../outputs/CategorizationCountAggregate";
import { CategorizationMaxAggregate } from "../outputs/CategorizationMaxAggregate";
import { CategorizationMinAggregate } from "../outputs/CategorizationMinAggregate";
import { CategorizationSumAggregate } from "../outputs/CategorizationSumAggregate";

@TypeGraphQL.ObjectType("AggregateCategorization", {
  isAbstract: true,
})
export class AggregateCategorization {
  @TypeGraphQL.Field(() => CategorizationCountAggregate, { nullable: true })
  _count!: CategorizationCountAggregate | null;

  @TypeGraphQL.Field(() => CategorizationAvgAggregate, { nullable: true })
  _avg!: CategorizationAvgAggregate | null;

  @TypeGraphQL.Field(() => CategorizationSumAggregate, { nullable: true })
  _sum!: CategorizationSumAggregate | null;

  @TypeGraphQL.Field(() => CategorizationMinAggregate, { nullable: true })
  _min!: CategorizationMinAggregate | null;

  @TypeGraphQL.Field(() => CategorizationMaxAggregate, { nullable: true })
  _max!: CategorizationMaxAggregate | null;
}
