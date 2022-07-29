import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyHabitInputEnvelope } from "../inputs/MetricUsageCreateManyHabitInputEnvelope";
import { MetricUsageCreateOrConnectWithoutHabitInput } from "../inputs/MetricUsageCreateOrConnectWithoutHabitInput";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [MetricUsageCreateWithoutHabitInput], { nullable: true })
  create?: MetricUsageCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: MetricUsageCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereUniqueInput], { nullable: true })
  connect?: MetricUsageWhereUniqueInput[] | undefined;
}
