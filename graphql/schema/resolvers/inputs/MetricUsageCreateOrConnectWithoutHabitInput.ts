import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageCreateWithoutHabitInput, { nullable: false })
  create!: MetricUsageCreateWithoutHabitInput;
}
