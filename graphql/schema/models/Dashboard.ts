import * as GraphQLScalars from "graphql-scalars";
import { Layout as LayoutItem } from "react-grid-layout";
import * as TypeGraphQL from "type-graphql";
import { User } from "../models/User";
import { DateTimeScalar } from "../scalars";

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

@TypeGraphQL.ObjectType("Dashboard", {
  isAbstract: true,
})
export class Dashboard {
  __typename?: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: false,
  })
  layouts!: DashboardLayouts;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isDefault!: boolean;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isPublic!: boolean;

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
