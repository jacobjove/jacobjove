import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Item } from "./Item";
import { User } from "./User";

@TypeGraphQL.ObjectType("List", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class List extends Model {
  owner?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  description?: string | null;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  @Property({ required: true })
  fields!: Record<string, string>;

  items?: Item[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const ListModel = getModelForClass<typeof List>(List);
export default ListModel;
