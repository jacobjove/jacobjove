import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneWithoutActionsInput } from "../inputs/HabitUpdateOneWithoutActionsInput";

@TypeGraphQL.InputType("ActionUpdateWithoutMetricRecordsInput", {
  isAbstract: true,
})
export class ActionUpdateWithoutMetricRecordsInput {
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

  @TypeGraphQL.Field(() => HabitUpdateOneWithoutActionsInput, { nullable: true })
  habit?: HabitUpdateOneWithoutActionsInput | undefined;
}
