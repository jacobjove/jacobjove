import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutActionsInput } from "../inputs/HabitCreateNestedOneWithoutActionsInput";

@TypeGraphQL.InputType("ActionCreateWithoutMetricRecordsInput", { isAbstract: true })
export class ActionCreateWithoutMetricRecordsInput {
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

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutActionsInput, { nullable: true })
  habit?: HabitCreateNestedOneWithoutActionsInput | undefined;
}
