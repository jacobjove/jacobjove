import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageWhereUniqueInput } from "../../../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricUsageArgs {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;
}
