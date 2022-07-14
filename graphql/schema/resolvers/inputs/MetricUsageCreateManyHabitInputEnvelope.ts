import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateManyHabitInput } from "../inputs/MetricUsageCreateManyHabitInput";

@TypeGraphQL.InputType("MetricUsageCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class MetricUsageCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateManyHabitInput], {
    nullable: false,
  })
  data!: MetricUsageCreateManyHabitInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
