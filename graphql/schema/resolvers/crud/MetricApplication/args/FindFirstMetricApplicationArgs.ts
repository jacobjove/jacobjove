import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationScalarFieldEnum } from "../../../../enums/MetricApplicationScalarFieldEnum";
import { MetricApplicationOrderByWithRelationInput } from "../../../inputs/MetricApplicationOrderByWithRelationInput";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationWhereInput, { nullable: true })
  where?: MetricApplicationWhereInput | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationOrderByWithRelationInput], { nullable: true })
  orderBy?: MetricApplicationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: true })
  cursor?: MetricApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "actId" | "metricId" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
