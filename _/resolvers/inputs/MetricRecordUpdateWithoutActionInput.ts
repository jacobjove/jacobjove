import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageUpdateOneRequiredWithoutRecordsInput } from "../inputs/MetricUsageUpdateOneRequiredWithoutRecordsInput";

@TypeGraphQL.InputType("MetricRecordUpdateWithoutActionInput", { isAbstract: true })
export class MetricRecordUpdateWithoutActionInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  value?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpdateOneRequiredWithoutRecordsInput, { nullable: true })
  metricUsage?: MetricUsageUpdateOneRequiredWithoutRecordsInput | undefined;
}
