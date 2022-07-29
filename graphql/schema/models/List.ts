import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "../models/Item";
import { User } from "../models/User";
import { ListCount } from "../resolvers/outputs/ListCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("List", {
  isAbstract: true,
})
export class List extends Model {
  owner?: User;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  fields!: Record<string, string>;

  items?: Item[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => ListCount, { nullable: true })
  _count?: ListCount | null;
}
