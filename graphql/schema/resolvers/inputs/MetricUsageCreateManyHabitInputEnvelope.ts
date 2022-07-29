import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyHabitInput } from "../inputs/MetricUsageCreateManyHabitInput";

@TypeGraphQL.InputType("MetricUsageCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class MetricUsageCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field(() => [MetricUsageCreateManyHabitInput], { nullable: false })
  data!: MetricUsageCreateManyHabitInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
