import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../models/Item";
import { User } from "../models/User";
import { ListCount } from "../resolvers/outputs/ListCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("List", {
  isAbstract: true,
})
export class List extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  owner?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: false,
  })
  fields!: Prisma.JsonValue;

  items?: Item[];

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

  @TypeGraphQL.Field((_type) => ListCount, {
    nullable: true,
  })
  _count?: ListCount | null;
}
