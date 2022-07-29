import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageOrderByWithRelationInput } from "../../../inputs/MetricUsageOrderByWithRelationInput";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageWhereInput, { nullable: true })
  where?: MetricUsageWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageOrderByWithRelationInput], { nullable: true })
  orderBy?: MetricUsageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: true })
  cursor?: MetricUsageWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
