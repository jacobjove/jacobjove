import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardAvgAggregate } from "../outputs/DashboardAvgAggregate";
import { DashboardCountAggregate } from "../outputs/DashboardCountAggregate";
import { DashboardMaxAggregate } from "../outputs/DashboardMaxAggregate";
import { DashboardMinAggregate } from "../outputs/DashboardMinAggregate";
import { DashboardSumAggregate } from "../outputs/DashboardSumAggregate";

@TypeGraphQL.ObjectType("AggregateDashboard", {
  isAbstract: true,
})
export class AggregateDashboard {
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
