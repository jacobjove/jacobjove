import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("MetricRecordCreateManyActionInput", {
  isAbstract: true,
})
export class MetricRecordCreateManyActionInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricUsageId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
