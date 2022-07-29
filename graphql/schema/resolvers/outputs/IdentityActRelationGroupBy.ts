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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  identityId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
