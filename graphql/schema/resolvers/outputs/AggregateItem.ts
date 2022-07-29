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
  @TypeGraphQL.Field(() => ItemCountAggregate, { nullable: true })
  _count!: ItemCountAggregate | null;

  @TypeGraphQL.Field(() => ItemAvgAggregate, { nullable: true })
  _avg!: ItemAvgAggregate | null;

  @TypeGraphQL.Field(() => ItemSumAggregate, { nullable: true })
  _sum!: ItemSumAggregate | null;

  @TypeGraphQL.Field(() => ItemMinAggregate, { nullable: true })
  _min!: ItemMinAggregate | null;

  @TypeGraphQL.Field(() => ItemMaxAggregate, { nullable: true })
  _max!: ItemMaxAggregate | null;
}
