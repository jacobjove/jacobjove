import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardLayouts } from "../../models/Dashboard";
import { DateTimeScalar } from "../../scalars";
import { DashboardAvgAggregate } from "../outputs/DashboardAvgAggregate";
import { DashboardCountAggregate } from "../outputs/DashboardCountAggregate";
import { DashboardMaxAggregate } from "../outputs/DashboardMaxAggregate";
import { DashboardMinAggregate } from "../outputs/DashboardMinAggregate";
import { DashboardSumAggregate } from "../outputs/DashboardSumAggregate";

@TypeGraphQL.ObjectType("DashboardGroupBy", {
  isAbstract: true,
})
export class DashboardGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  layouts!: DashboardLayouts;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: false })
  isDefault!: boolean;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DashboardCountAggregate, { nullable: true })
  _count!: DashboardCountAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardAvgAggregate, { nullable: true })
  _avg!: DashboardAvgAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardSumAggregate, { nullable: true })
  _sum!: DashboardSumAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardMinAggregate, { nullable: true })
  _min!: DashboardMinAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardMaxAggregate, { nullable: true })
  _max!: DashboardMaxAggregate | null;
}
