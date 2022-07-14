import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ItemAvgAggregate } from "../outputs/ItemAvgAggregate";
import { ItemCountAggregate } from "../outputs/ItemCountAggregate";
import { ItemMaxAggregate } from "../outputs/ItemMaxAggregate";
import { ItemMinAggregate } from "../outputs/ItemMinAggregate";
import { ItemSumAggregate } from "../outputs/ItemSumAggregate";

@TypeGraphQL.ObjectType("ItemGroupBy", {
  isAbstract: true,
})
export class ItemGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  listId!: string;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: false,
  })
  data!: Prisma.JsonValue;

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

  @TypeGraphQL.Field((_type) => ItemCountAggregate, {
    nullable: true,
  })
  _count!: ItemCountAggregate | null;

  @TypeGraphQL.Field((_type) => ItemAvgAggregate, {
    nullable: true,
  })
  _avg!: ItemAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ItemSumAggregate, {
    nullable: true,
  })
  _sum!: ItemSumAggregate | null;

  @TypeGraphQL.Field((_type) => ItemMinAggregate, {
    nullable: true,
  })
  _min!: ItemMinAggregate | null;

  @TypeGraphQL.Field((_type) => ItemMaxAggregate, {
    nullable: true,
  })
  _max!: ItemMaxAggregate | null;
}
