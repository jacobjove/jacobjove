import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageScalarFieldEnum } from "../../../../enums/MetricUsageScalarFieldEnum";
import { MetricUsageOrderByWithRelationInput } from "../../../inputs/MetricUsageOrderByWithRelationInput";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyMetricUsageArgs {
  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  where?: MetricUsageWhereInput | undefined;

  @TypeGraphQL.Field(() => [MetricUsageOrderByWithRelationInput], { nullable: true })
  orderBy?: MetricUsageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: true })
  cursor?: MetricUsageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [MetricUsageScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "metricId" | "habitId" | "archivedAt"> | undefined;
}
