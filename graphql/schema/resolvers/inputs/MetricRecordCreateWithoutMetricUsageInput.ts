import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActionCreateNestedOneWithoutMetricRecordsInput } from "../inputs/ActionCreateNestedOneWithoutMetricRecordsInput";

@TypeGraphQL.InputType("MetricRecordCreateWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordCreateWithoutMetricUsageInput {
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

  @TypeGraphQL.Field((_type) => ActionCreateNestedOneWithoutMetricRecordsInput, {
    nullable: false,
  })
  action!: ActionCreateNestedOneWithoutMetricRecordsInput;
}
