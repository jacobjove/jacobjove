import * as TypeGraphQL from "type-graphql";
import { MetricRecordScalarFieldEnum } from "../../../../enums/MetricRecordScalarFieldEnum";
import { MetricRecordOrderByWithRelationInput } from "../../../inputs/MetricRecordOrderByWithRelationInput";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, {
    nullable: true,
  })
  where?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MetricRecordOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MetricRecordWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        "id" | "metricUsageId" | "actionId" | "value" | "createdAt" | "updatedAt" | "archivedAt"
      >
    | undefined;
}
