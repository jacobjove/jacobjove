import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageUpdateWithoutHabitInput } from "../inputs/MetricUsageUpdateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpsertWithWhereUniqueWithoutHabitInput", { isAbstract: true })
export class MetricUsageUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageUpdateWithoutHabitInput, { nullable: false })
  update!: MetricUsageUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => MetricUsageCreateWithoutHabitInput, { nullable: false })
  create!: MetricUsageCreateWithoutHabitInput;
}
