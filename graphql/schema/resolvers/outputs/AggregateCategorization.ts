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
  @TypeGraphQL.Field((_type) => CategorizationCountAggregate, { nullable: true })
  _count!: CategorizationCountAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationAvgAggregate, { nullable: true })
  _avg!: CategorizationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationSumAggregate, { nullable: true })
  _sum!: CategorizationSumAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationMinAggregate, { nullable: true })
  _min!: CategorizationMinAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationMaxAggregate, { nullable: true })
  _max!: CategorizationMaxAggregate | null;
}
