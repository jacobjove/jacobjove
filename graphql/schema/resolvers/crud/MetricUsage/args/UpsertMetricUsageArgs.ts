import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateInput } from "../../../inputs/MetricUsageCreateInput";
import { MetricUsageUpdateInput } from "../../../inputs/MetricUsageUpdateInput";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateInput, {
    nullable: false,
  })
  create!: MetricUsageCreateInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateInput, {
    nullable: false,
  })
  update!: MetricUsageUpdateInput;
}
