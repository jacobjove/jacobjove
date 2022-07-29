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
  @TypeGraphQL.Field((_type) => IdentityActRelationCountAggregate, { nullable: true })
  _count!: IdentityActRelationCountAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityActRelationAvgAggregate, { nullable: true })
  _avg!: IdentityActRelationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityActRelationSumAggregate, { nullable: true })
  _sum!: IdentityActRelationSumAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityActRelationMinAggregate, { nullable: true })
  _min!: IdentityActRelationMinAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityActRelationMaxAggregate, { nullable: true })
  _max!: IdentityActRelationMaxAggregate | null;
}
