import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutHabitInput, { nullable: false })
  create!: MetricUsageCreateWithoutHabitInput;
}
