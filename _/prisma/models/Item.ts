import { Model } from "@/graphql/schema/types";
import { prop as Property } from "@typegoose/typegoose";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { List } from "./List";

export type ItemData = Record<string, string>;

@TypeGraphQL.ObjectType("Item", { isAbstract: true })
export class Item extends Model {
  list?: List;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  listId!: string;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  @Property({ required: true })
  data!: ItemData;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}
