import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageUpdateWithoutHabitInput } from "../inputs/MetricUsageUpdateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateWithoutHabitInput, { nullable: false })
  data!: MetricUsageUpdateWithoutHabitInput;
}
