import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateManyWithoutActionInput } from "../inputs/MetricRecordUpdateManyWithoutActionInput";

@TypeGraphQL.InputType("ActionUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpdateWithoutHabitInput {
  @TypeGraphQL.Field({ nullable: true })
  start?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  end?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricRecordUpdateManyWithoutActionInput, { nullable: true })
  metricRecords?: MetricRecordUpdateManyWithoutActionInput | undefined;
}
