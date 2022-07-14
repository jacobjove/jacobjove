import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateOrConnectWithoutRecordsInput } from "../inputs/MetricUsageCreateOrConnectWithoutRecordsInput";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageUpdateWithoutRecordsInput } from "../inputs/MetricUsageUpdateWithoutRecordsInput";
import { MetricUsageUpsertWithoutRecordsInput } from "../inputs/MetricUsageUpsertWithoutRecordsInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateOneRequiredWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageUpdateOneRequiredWithoutRecordsInput {
  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutRecordsInput, {
    nullable: true,
  })
  create?: MetricUsageCreateWithoutRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateOrConnectWithoutRecordsInput, {
    nullable: true,
  })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageUpsertWithoutRecordsInput, {
    nullable: true,
  })
  upsert?: MetricUsageUpsertWithoutRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, {
    nullable: true,
  })
  connect?: MetricUsageWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateWithoutRecordsInput, {
    nullable: true,
  })
  update?: MetricUsageUpdateWithoutRecordsInput | undefined;
}
