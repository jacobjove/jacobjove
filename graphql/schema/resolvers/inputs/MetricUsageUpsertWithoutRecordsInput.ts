import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageUpdateWithoutRecordsInput } from "../inputs/MetricUsageUpdateWithoutRecordsInput";

@TypeGraphQL.InputType("MetricUsageUpsertWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageUpsertWithoutRecordsInput {
  @TypeGraphQL.Field((_type) => MetricUsageUpdateWithoutRecordsInput, {
    nullable: false,
  })
  update!: MetricUsageUpdateWithoutRecordsInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutRecordsInput, {
    nullable: false,
  })
  create!: MetricUsageCreateWithoutRecordsInput;
}
