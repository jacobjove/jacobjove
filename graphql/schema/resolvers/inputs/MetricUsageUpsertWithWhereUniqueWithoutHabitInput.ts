import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageUpdateWithoutHabitInput } from "../inputs/MetricUsageUpdateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateWithoutHabitInput, { nullable: false })
  update!: MetricUsageUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutHabitInput, { nullable: false })
  create!: MetricUsageCreateWithoutHabitInput;
}
