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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ValueCountAggregate, { nullable: true })
  _count!: ValueCountAggregate | null;

  @TypeGraphQL.Field(() => ValueAvgAggregate, { nullable: true })
  _avg!: ValueAvgAggregate | null;

  @TypeGraphQL.Field(() => ValueSumAggregate, { nullable: true })
  _sum!: ValueSumAggregate | null;

  @TypeGraphQL.Field(() => ValueMinAggregate, { nullable: true })
  _min!: ValueMinAggregate | null;

  @TypeGraphQL.Field(() => ValueMaxAggregate, { nullable: true })
  _max!: ValueMaxAggregate | null;
}
