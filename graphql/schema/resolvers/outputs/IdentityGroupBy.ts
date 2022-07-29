import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityAvgAggregate } from "../outputs/IdentityAvgAggregate";
import { IdentityCountAggregate } from "../outputs/IdentityCountAggregate";
import { IdentityMaxAggregate } from "../outputs/IdentityMaxAggregate";
import { IdentityMinAggregate } from "../outputs/IdentityMinAggregate";
import { IdentitySumAggregate } from "../outputs/IdentitySumAggregate";

@TypeGraphQL.ObjectType("IdentityGroupBy", {
  isAbstract: true,
})
export class IdentityGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => IdentityCountAggregate, { nullable: true })
  _count!: IdentityCountAggregate | null;

  @TypeGraphQL.Field(() => IdentityAvgAggregate, { nullable: true })
  _avg!: IdentityAvgAggregate | null;

  @TypeGraphQL.Field(() => IdentitySumAggregate, { nullable: true })
  _sum!: IdentitySumAggregate | null;

  @TypeGraphQL.Field(() => IdentityMinAggregate, { nullable: true })
  _min!: IdentityMinAggregate | null;

  @TypeGraphQL.Field(() => IdentityMaxAggregate, { nullable: true })
  _max!: IdentityMaxAggregate | null;
}
