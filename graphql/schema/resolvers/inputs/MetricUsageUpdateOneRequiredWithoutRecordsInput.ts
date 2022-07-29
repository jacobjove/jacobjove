import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateOrConnectWithoutRecordsInput } from "../inputs/MetricUsageCreateOrConnectWithoutRecordsInput";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageUpdateWithoutRecordsInput } from "../inputs/MetricUsageUpdateWithoutRecordsInput";
import { MetricUsageUpsertWithoutRecordsInput } from "../inputs/MetricUsageUpsertWithoutRecordsInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateOneRequiredWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageUpdateOneRequiredWithoutRecordsInput {
  @TypeGraphQL.Field(() => MetricUsageCreateWithoutRecordsInput, { nullable: true })
  create?: MetricUsageCreateWithoutRecordsInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateOrConnectWithoutRecordsInput, { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutRecordsInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpsertWithoutRecordsInput, { nullable: true })
  upsert?: MetricUsageUpsertWithoutRecordsInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: true })
  connect?: MetricUsageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpdateWithoutRecordsInput, { nullable: true })
  update?: MetricUsageUpdateWithoutRecordsInput | undefined;
}
