import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateOrConnectWithoutRecordsInput } from "../inputs/MetricUsageCreateOrConnectWithoutRecordsInput";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateNestedOneWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageCreateNestedOneWithoutRecordsInput {
  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutRecordsInput, {
    nullable: true,
  })
  create?: MetricUsageCreateWithoutRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateOrConnectWithoutRecordsInput, {
    nullable: true,
  })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, {
    nullable: true,
  })
  connect?: MetricUsageWhereUniqueInput | undefined;
}
