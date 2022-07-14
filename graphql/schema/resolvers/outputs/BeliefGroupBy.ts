import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { BeliefAvgAggregate } from "../outputs/BeliefAvgAggregate";
import { BeliefCountAggregate } from "../outputs/BeliefCountAggregate";
import { BeliefMaxAggregate } from "../outputs/BeliefMaxAggregate";
import { BeliefMinAggregate } from "../outputs/BeliefMinAggregate";
import { BeliefSumAggregate } from "../outputs/BeliefSumAggregate";

@TypeGraphQL.ObjectType("BeliefGroupBy", {
  isAbstract: true,
})
export class BeliefGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => BeliefCountAggregate, {
    nullable: true,
  })
  _count!: BeliefCountAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefAvgAggregate, {
    nullable: true,
  })
  _avg!: BeliefAvgAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefSumAggregate, {
    nullable: true,
  })
  _sum!: BeliefSumAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefMinAggregate, {
    nullable: true,
  })
  _min!: BeliefMinAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefMaxAggregate, {
    nullable: true,
  })
  _max!: BeliefMaxAggregate | null;
}
