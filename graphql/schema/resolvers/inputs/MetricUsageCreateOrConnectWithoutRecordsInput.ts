import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateOrConnectWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageCreateOrConnectWithoutRecordsInput {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageCreateWithoutRecordsInput, { nullable: false })
  create!: MetricUsageCreateWithoutRecordsInput;
}
