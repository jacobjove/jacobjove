import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricUsageCreateNestedOneWithoutRecordsInput } from "../inputs/MetricUsageCreateNestedOneWithoutRecordsInput";

@TypeGraphQL.InputType("MetricRecordCreateWithoutActionInput", { isAbstract: true })
export class MetricRecordCreateWithoutActionInput {
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
}
