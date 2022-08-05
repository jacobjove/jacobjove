import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateOrConnectWithoutRecordsInput } from "../inputs/MetricUsageCreateOrConnectWithoutRecordsInput";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateNestedOneWithoutRecordsInput", { isAbstract: true })
export class MetricUsageCreateNestedOneWithoutRecordsInput {
  @TypeGraphQL.Field(() => MetricUsageCreateWithoutRecordsInput, { nullable: true })
  create?: MetricUsageCreateWithoutRecordsInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateOrConnectWithoutRecordsInput, { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutRecordsInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: true })
  connect?: MetricUsageWhereUniqueInput | undefined;
}
