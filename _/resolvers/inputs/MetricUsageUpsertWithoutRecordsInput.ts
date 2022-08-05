import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutRecordsInput } from "../inputs/MetricUsageCreateWithoutRecordsInput";
import { MetricUsageUpdateWithoutRecordsInput } from "../inputs/MetricUsageUpdateWithoutRecordsInput";

@TypeGraphQL.InputType("MetricUsageUpsertWithoutRecordsInput", { isAbstract: true })
export class MetricUsageUpsertWithoutRecordsInput {
  @TypeGraphQL.Field(() => MetricUsageUpdateWithoutRecordsInput, { nullable: false })
  update!: MetricUsageUpdateWithoutRecordsInput;

  @TypeGraphQL.Field(() => MetricUsageCreateWithoutRecordsInput, { nullable: false })
  create!: MetricUsageCreateWithoutRecordsInput;
}
