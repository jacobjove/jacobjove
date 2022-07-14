import * as TypeGraphQL from "type-graphql";
import { MetricApplicationScalarFieldEnum } from "../../../../enums/MetricApplicationScalarFieldEnum";
import { MetricApplicationOrderByWithRelationInput } from "../../../inputs/MetricApplicationOrderByWithRelationInput";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereInput, {
    nullable: true,
  })
  where?: MetricApplicationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MetricApplicationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MetricApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "actId" | "metricId" | "createdAt" | "updatedAt" | "archivedAt">
    | undefined;
}
