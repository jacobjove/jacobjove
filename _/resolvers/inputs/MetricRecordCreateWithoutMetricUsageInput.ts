import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActionCreateNestedOneWithoutMetricRecordsInput } from "../inputs/ActionCreateNestedOneWithoutMetricRecordsInput";

@TypeGraphQL.InputType("MetricRecordCreateWithoutMetricUsageInput", { isAbstract: true })
export class MetricRecordCreateWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActionCreateNestedOneWithoutMetricRecordsInput, { nullable: false })
  action!: ActionCreateNestedOneWithoutMetricRecordsInput;
}
