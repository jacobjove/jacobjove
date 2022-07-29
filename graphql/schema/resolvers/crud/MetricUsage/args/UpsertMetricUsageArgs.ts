import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateInput } from "../../../inputs/MetricUsageCreateInput";
import { MetricUsageUpdateInput } from "../../../inputs/MetricUsageUpdateInput";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricUsageArgs {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageCreateInput, { nullable: false })
  create!: MetricUsageCreateInput;

  @TypeGraphQL.Field(() => MetricUsageUpdateInput, { nullable: false })
  update!: MetricUsageUpdateInput;
}
