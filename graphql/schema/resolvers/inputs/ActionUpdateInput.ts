import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneWithoutActionsInput } from "../inputs/HabitUpdateOneWithoutActionsInput";
import { MetricRecordUpdateManyWithoutActionInput } from "../inputs/MetricRecordUpdateManyWithoutActionInput";

@TypeGraphQL.InputType("ActionUpdateInput", {
  isAbstract: true,
})
export class ActionUpdateInput {
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

  @TypeGraphQL.Field((_type) => HabitUpdateOneWithoutActionsInput, { nullable: true })
  habit?: HabitUpdateOneWithoutActionsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyWithoutActionInput, { nullable: true })
  metricRecords?: MetricRecordUpdateManyWithoutActionInput | undefined;
}
