import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricRecordCreateNestedManyWithoutActionInput } from "../inputs/MetricRecordCreateNestedManyWithoutActionInput";

@TypeGraphQL.InputType("ActionCreateWithoutHabitInput", { isAbstract: true })
export class ActionCreateWithoutHabitInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricRecordCreateNestedManyWithoutActionInput, { nullable: true })
  metricRecords?: MetricRecordCreateNestedManyWithoutActionInput | undefined;
}
