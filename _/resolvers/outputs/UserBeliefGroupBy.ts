import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BeliefAvgAggregate } from "../outputs/BeliefAvgAggregate";
import { BeliefCountAggregate } from "../outputs/BeliefCountAggregate";
import { BeliefMaxAggregate } from "../outputs/BeliefMaxAggregate";
import { BeliefMinAggregate } from "../outputs/BeliefMinAggregate";
import { BeliefSumAggregate } from "../outputs/BeliefSumAggregate";

@TypeGraphQL.ObjectType("BeliefGroupBy", { isAbstract: true })
export class BeliefGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  beliefId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => BeliefCountAggregate, { nullable: true })
  _count!: BeliefCountAggregate | null;

  @TypeGraphQL.Field(() => BeliefAvgAggregate, { nullable: true })
  _avg!: BeliefAvgAggregate | null;

  @TypeGraphQL.Field(() => BeliefSumAggregate, { nullable: true })
  _sum!: BeliefSumAggregate | null;

  @TypeGraphQL.Field(() => BeliefMinAggregate, { nullable: true })
  _min!: BeliefMinAggregate | null;

  @TypeGraphQL.Field(() => BeliefMaxAggregate, { nullable: true })
  _max!: BeliefMaxAggregate | null;
}
