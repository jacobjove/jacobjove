import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityAvgAggregate } from "../outputs/IdentityAvgAggregate";
import { IdentityCountAggregate } from "../outputs/IdentityCountAggregate";
import { IdentityMaxAggregate } from "../outputs/IdentityMaxAggregate";
import { IdentityMinAggregate } from "../outputs/IdentityMinAggregate";
import { IdentitySumAggregate } from "../outputs/IdentitySumAggregate";

@TypeGraphQL.ObjectType("AggregateIdentity", {
  isAbstract: true,
})
export class AggregateIdentity {
  @TypeGraphQL.Field((_type) => IdentityCountAggregate, { nullable: true })
  _count!: IdentityCountAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityAvgAggregate, { nullable: true })
  _avg!: IdentityAvgAggregate | null;

  @TypeGraphQL.Field((_type) => IdentitySumAggregate, { nullable: true })
  _sum!: IdentitySumAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityMinAggregate, { nullable: true })
  _min!: IdentityMinAggregate | null;

  @TypeGraphQL.Field((_type) => IdentityMaxAggregate, { nullable: true })
  _max!: IdentityMaxAggregate | null;
}
