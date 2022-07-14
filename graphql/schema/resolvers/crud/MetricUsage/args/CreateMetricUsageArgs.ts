import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateInput } from "../../../inputs/MetricUsageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageCreateInput, {
    nullable: false,
  })
  data!: MetricUsageCreateInput;
}
