import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordScalarFieldEnum } from "../../../../enums/MetricRecordScalarFieldEnum";
import { MetricRecordOrderByWithRelationInput } from "../../../inputs/MetricRecordOrderByWithRelationInput";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyMetricRecordArgs {
  @TypeGraphQL.Field(() => MetricRecordWhereInput, { nullable: true })
  where?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field(() => [MetricRecordOrderByWithRelationInput], { nullable: true })
  orderBy?: MetricRecordOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: true })
  cursor?: MetricRecordWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [MetricRecordScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        "id" | "metricUsageId" | "actionId" | "value" | "createdAt" | "updatedAt" | "archivedAt"
      >
    | undefined;
}
