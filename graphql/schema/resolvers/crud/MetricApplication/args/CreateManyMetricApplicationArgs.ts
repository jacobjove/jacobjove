import * as TypeGraphQL from "type-graphql";
import { MetricApplicationCreateManyInput } from "../../../inputs/MetricApplicationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => [MetricApplicationCreateManyInput], {
    nullable: false,
  })
  data!: MetricApplicationCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
