import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActionCreateNestedOneWithoutMetricRecordsInput } from "../inputs/ActionCreateNestedOneWithoutMetricRecordsInput";
import { MetricUsageCreateNestedOneWithoutRecordsInput } from "../inputs/MetricUsageCreateNestedOneWithoutRecordsInput";

@TypeGraphQL.InputType("MetricRecordCreateInput", {
  isAbstract: true,
})
export class MetricRecordCreateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  value!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateNestedOneWithoutRecordsInput, {
    nullable: false,
  })
  metricUsage!: MetricUsageCreateNestedOneWithoutRecordsInput;

  @TypeGraphQL.Field((_type) => ActionCreateNestedOneWithoutMetricRecordsInput, {
    nullable: false,
  })
  action!: ActionCreateNestedOneWithoutMetricRecordsInput;
}
