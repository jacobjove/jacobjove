import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ItemAvgAggregate } from "../outputs/ItemAvgAggregate";
import { ItemCountAggregate } from "../outputs/ItemCountAggregate";
import { ItemMaxAggregate } from "../outputs/ItemMaxAggregate";
import { ItemMinAggregate } from "../outputs/ItemMinAggregate";
import { ItemSumAggregate } from "../outputs/ItemSumAggregate";

@TypeGraphQL.ObjectType("ItemGroupBy", { isAbstract: true })
export class ItemGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  listId!: string;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  data!: Record<string, string>;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
