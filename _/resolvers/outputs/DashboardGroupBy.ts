import { DashboardLayouts } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { DashboardAvgAggregate } from "../outputs/DashboardAvgAggregate";
import { DashboardCountAggregate } from "../outputs/DashboardCountAggregate";
import { DashboardMaxAggregate } from "../outputs/DashboardMaxAggregate";
import { DashboardMinAggregate } from "../outputs/DashboardMinAggregate";
import { DashboardSumAggregate } from "../outputs/DashboardSumAggregate";

@TypeGraphQL.ObjectType("DashboardGroupBy", { isAbstract: true })
export class DashboardGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  layouts!: DashboardLayouts;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isDefault!: boolean;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  public!: boolean;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => DashboardCountAggregate, { nullable: true })
  _count!: DashboardCountAggregate | null;

  @TypeGraphQL.Field(() => DashboardAvgAggregate, { nullable: true })
  _avg!: DashboardAvgAggregate | null;

  @TypeGraphQL.Field(() => DashboardSumAggregate, { nullable: true })
  _sum!: DashboardSumAggregate | null;

  @TypeGraphQL.Field(() => DashboardMinAggregate, { nullable: true })
  _min!: DashboardMinAggregate | null;

  @TypeGraphQL.Field(() => DashboardMaxAggregate, { nullable: true })
  _max!: DashboardMaxAggregate | null;
}
