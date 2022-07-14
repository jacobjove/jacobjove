import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateManyInput } from "../../../inputs/MetricUsageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMetricUsageArgs {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateManyInput], {
    nullable: false,
  })
  data!: MetricUsageCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
