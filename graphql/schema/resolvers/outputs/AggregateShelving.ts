import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingAvgAggregate } from "../outputs/ShelvingAvgAggregate";
import { ShelvingCountAggregate } from "../outputs/ShelvingCountAggregate";
import { ShelvingMaxAggregate } from "../outputs/ShelvingMaxAggregate";
import { ShelvingMinAggregate } from "../outputs/ShelvingMinAggregate";
import { ShelvingSumAggregate } from "../outputs/ShelvingSumAggregate";

@TypeGraphQL.ObjectType("AggregateShelving", {
  isAbstract: true,
})
export class AggregateShelving {
  @TypeGraphQL.Field((_type) => ShelvingCountAggregate, { nullable: true })
  _count!: ShelvingCountAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingAvgAggregate, { nullable: true })
  _avg!: ShelvingAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingSumAggregate, { nullable: true })
  _sum!: ShelvingSumAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingMinAggregate, { nullable: true })
  _min!: ShelvingMinAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingMaxAggregate, { nullable: true })
  _max!: ShelvingMaxAggregate | null;
}
