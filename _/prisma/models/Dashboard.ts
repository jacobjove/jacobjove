import { Model } from "@/graphql/schema/types";
import { prop as Property } from "@typegoose/typegoose";
import * as GraphQLScalars from "graphql-scalars";
import { ObjectId } from "mongodb";
import { Layout as LayoutItem } from "react-grid-layout";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { User } from "./User";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type CompleteDashboardLayouts = Record<
  "xxs" | "xs" | "sm" | "md" | "lg" | "xl",
  DashboardComponent[]
>;

export type DashboardLayouts = AtLeastOne<CompleteDashboardLayouts>;

export type DashboardComponentKey =
  | "calendar"
  | "identities"
  | "tasks"
  | "values"
  | "topics"
  | "routines";

// https://github.com/react-grid-layout/react-grid-layout#grid-item-props
export interface DashboardComponent extends LayoutItem {
  i: DashboardComponentKey;
}

@TypeGraphQL.ObjectType("Dashboard", { isAbstract: true })
export class Dashboard extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  user?: User;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  @Property({ required: true })
  layouts!: DashboardLayouts;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  isDefault!: boolean;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  public!: boolean;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}
