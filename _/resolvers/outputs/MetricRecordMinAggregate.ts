import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MetricRecordMinAggregate", { isAbstract: true })
export class MetricRecordMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  _id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  metricUsageId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actionId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  value!: number | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
