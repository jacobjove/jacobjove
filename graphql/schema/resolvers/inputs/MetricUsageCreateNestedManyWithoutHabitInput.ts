import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyHabitInputEnvelope } from "../inputs/MetricUsageCreateManyHabitInputEnvelope";
import { MetricUsageCreateOrConnectWithoutHabitInput } from "../inputs/MetricUsageCreateOrConnectWithoutHabitInput";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateWithoutHabitInput], { nullable: true })
  create?: MetricUsageCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: MetricUsageCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  connect?: MetricUsageWhereUniqueInput[] | undefined;
}
