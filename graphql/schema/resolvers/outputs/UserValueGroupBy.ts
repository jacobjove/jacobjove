import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ValueAvgAggregate } from "../outputs/ValueAvgAggregate";
import { ValueCountAggregate } from "../outputs/ValueCountAggregate";
import { ValueMaxAggregate } from "../outputs/ValueMaxAggregate";
import { ValueMinAggregate } from "../outputs/ValueMinAggregate";
import { ValueSumAggregate } from "../outputs/ValueSumAggregate";

@TypeGraphQL.ObjectType("ValueGroupBy", {
  isAbstract: true,
})
export class ValueGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  valueId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => ValueCountAggregate, { nullable: true })
  _count!: ValueCountAggregate | null;

  @TypeGraphQL.Field((_type) => ValueAvgAggregate, { nullable: true })
  _avg!: ValueAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ValueSumAggregate, { nullable: true })
  _sum!: ValueSumAggregate | null;

  @TypeGraphQL.Field((_type) => ValueMinAggregate, { nullable: true })
  _min!: ValueMinAggregate | null;

  @TypeGraphQL.Field((_type) => ValueMaxAggregate, { nullable: true })
  _max!: ValueMaxAggregate | null;
}
