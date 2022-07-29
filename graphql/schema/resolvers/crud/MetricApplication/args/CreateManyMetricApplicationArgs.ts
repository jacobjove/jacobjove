import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyInput } from "../../../inputs/MetricApplicationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMetricApplicationArgs {
  @TypeGraphQL.Field(() => [MetricApplicationCreateManyInput], { nullable: false })
  data!: MetricApplicationCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
