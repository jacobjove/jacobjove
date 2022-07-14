import * as TypeGraphQL from "type-graphql";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricUsageWhereUniqueInput;
}
