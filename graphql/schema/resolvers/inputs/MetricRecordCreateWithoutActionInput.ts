import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { MetricUsageCreateNestedOneWithoutRecordsInput } from "../inputs/MetricUsageCreateNestedOneWithoutRecordsInput";

@TypeGraphQL.InputType("MetricRecordCreateWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordCreateWithoutActionInput {
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
}
