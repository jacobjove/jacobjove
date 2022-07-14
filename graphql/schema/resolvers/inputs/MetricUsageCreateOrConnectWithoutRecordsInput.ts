import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateOrConnectWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageCreateOrConnectWithoutRecordsInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutRecordsInput, {
    nullable: false,
  })
  create!: MetricUsageCreateWithoutRecordsInput;
}
