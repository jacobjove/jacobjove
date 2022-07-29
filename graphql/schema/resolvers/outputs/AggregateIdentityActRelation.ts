import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationAvgAggregate } from "../outputs/IdentityActRelationAvgAggregate";
import { IdentityActRelationCountAggregate } from "../outputs/IdentityActRelationCountAggregate";
import { IdentityActRelationMaxAggregate } from "../outputs/IdentityActRelationMaxAggregate";
import { IdentityActRelationMinAggregate } from "../outputs/IdentityActRelationMinAggregate";
import { IdentityActRelationSumAggregate } from "../outputs/IdentityActRelationSumAggregate";

@TypeGraphQL.ObjectType("AggregateIdentityActRelation", {
  isAbstract: true,
})
export class AggregateIdentityActRelation {
  @TypeGraphQL.Field(() => IdentityActRelationCountAggregate, { nullable: true })
  _count!: IdentityActRelationCountAggregate | null;

  @TypeGraphQL.Field(() => IdentityActRelationAvgAggregate, { nullable: true })
  _avg!: IdentityActRelationAvgAggregate | null;

  @TypeGraphQL.Field(() => IdentityActRelationSumAggregate, { nullable: true })
  _sum!: IdentityActRelationSumAggregate | null;

  @TypeGraphQL.Field(() => IdentityActRelationMinAggregate, { nullable: true })
  _min!: IdentityActRelationMinAggregate | null;

  @TypeGraphQL.Field(() => IdentityActRelationMaxAggregate, { nullable: true })
  _max!: IdentityActRelationMaxAggregate | null;
}
