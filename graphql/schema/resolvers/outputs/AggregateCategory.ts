import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryAvgAggregate } from "../outputs/CategoryAvgAggregate";
import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
import { CategorySumAggregate } from "../outputs/CategorySumAggregate";

@TypeGraphQL.ObjectType("AggregateCategory", {
  isAbstract: true,
})
export class AggregateCategory {
  @TypeGraphQL.Field((_type) => CategoryCountAggregate, { nullable: true })
  _count!: CategoryCountAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryAvgAggregate, { nullable: true })
  _avg!: CategoryAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CategorySumAggregate, { nullable: true })
  _sum!: CategorySumAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryMinAggregate, { nullable: true })
  _min!: CategoryMinAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryMaxAggregate, { nullable: true })
  _max!: CategoryMaxAggregate | null;
}
