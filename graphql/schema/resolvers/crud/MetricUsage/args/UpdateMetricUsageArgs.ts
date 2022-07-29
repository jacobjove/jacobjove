import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageUpdateInput } from "../../../inputs/MetricUsageUpdateInput";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageUpdateInput, { nullable: false })
  data!: MetricUsageUpdateInput;

  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;
}
