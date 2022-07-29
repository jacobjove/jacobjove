import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { List } from "../models/List";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

export type ItemData = Record<string, string>;

@TypeGraphQL.ObjectType("Item", {
  isAbstract: true,
})
export class Item extends Model {
  list?: List;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  listId!: string;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  data!: ItemData;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
