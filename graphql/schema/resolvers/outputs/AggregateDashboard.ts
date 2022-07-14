import * as TypeGraphQL from "type-graphql";
import { DashboardAvgAggregate } from "../outputs/DashboardAvgAggregate";
import { DashboardCountAggregate } from "../outputs/DashboardCountAggregate";
import { DashboardMaxAggregate } from "../outputs/DashboardMaxAggregate";
import { DashboardMinAggregate } from "../outputs/DashboardMinAggregate";
import { DashboardSumAggregate } from "../outputs/DashboardSumAggregate";

@TypeGraphQL.ObjectType("AggregateDashboard", {
  isAbstract: true,
})
export class AggregateDashboard {
  @TypeGraphQL.Field((_type) => DashboardCountAggregate, {
    nullable: true,
  })
  _count!: DashboardCountAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardAvgAggregate, {
    nullable: true,
  })
  _avg!: DashboardAvgAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardSumAggregate, {
    nullable: true,
  })
  _sum!: DashboardSumAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardMinAggregate, {
    nullable: true,
  })
  _min!: DashboardMinAggregate | null;

  @TypeGraphQL.Field((_type) => DashboardMaxAggregate, {
    nullable: true,
  })
  _max!: DashboardMaxAggregate | null;
}
