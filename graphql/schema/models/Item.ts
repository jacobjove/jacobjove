import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { List } from "../models/List";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Item", {
  isAbstract: true,
})
export class Item extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  list?: List;

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
  archivedAt?: Date | null;
}
