import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemAvgAggregate } from "../outputs/ItemAvgAggregate";
import { ItemCountAggregate } from "../outputs/ItemCountAggregate";
import { ItemMaxAggregate } from "../outputs/ItemMaxAggregate";
import { ItemMinAggregate } from "../outputs/ItemMinAggregate";
import { ItemSumAggregate } from "../outputs/ItemSumAggregate";

@TypeGraphQL.ObjectType("AggregateItem", {
  isAbstract: true,
})
export class AggregateItem {
  @TypeGraphQL.Field((_type) => ItemCountAggregate, { nullable: true })
  _count!: ItemCountAggregate | null;

  @TypeGraphQL.Field((_type) => ItemAvgAggregate, { nullable: true })
  _avg!: ItemAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ItemSumAggregate, { nullable: true })
  _sum!: ItemSumAggregate | null;

  @TypeGraphQL.Field((_type) => ItemMinAggregate, { nullable: true })
  _min!: ItemMinAggregate | null;

  @TypeGraphQL.Field((_type) => ItemMaxAggregate, { nullable: true })
  _max!: ItemMaxAggregate | null;
}
