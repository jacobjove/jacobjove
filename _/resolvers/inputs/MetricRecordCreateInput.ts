import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActionCreateNestedOneWithoutMetricRecordsInput } from "../inputs/ActionCreateNestedOneWithoutMetricRecordsInput";
import { MetricUsageCreateNestedOneWithoutRecordsInput } from "../inputs/MetricUsageCreateNestedOneWithoutRecordsInput";

@TypeGraphQL.InputType("MetricRecordCreateInput", { isAbstract: true })
export class MetricRecordCreateInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateNestedOneWithoutRecordsInput, { nullable: false })
  metricUsage!: MetricUsageCreateNestedOneWithoutRecordsInput;

  @TypeGraphQL.Field(() => ActionCreateNestedOneWithoutMetricRecordsInput, { nullable: false })
  action!: ActionCreateNestedOneWithoutMetricRecordsInput;
}
