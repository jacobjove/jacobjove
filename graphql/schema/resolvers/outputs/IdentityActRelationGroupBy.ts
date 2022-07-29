import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { IdentityActRelationAvgAggregate } from "../outputs/IdentityActRelationAvgAggregate";
import { IdentityActRelationCountAggregate } from "../outputs/IdentityActRelationCountAggregate";
import { IdentityActRelationMaxAggregate } from "../outputs/IdentityActRelationMaxAggregate";
import { IdentityActRelationMinAggregate } from "../outputs/IdentityActRelationMinAggregate";
import { IdentityActRelationSumAggregate } from "../outputs/IdentityActRelationSumAggregate";

@TypeGraphQL.ObjectType("IdentityActRelationGroupBy", {
  isAbstract: true,
})
export class IdentityActRelationGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  identityId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
