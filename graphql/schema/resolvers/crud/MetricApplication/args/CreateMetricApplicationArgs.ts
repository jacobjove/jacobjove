import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateInput } from "../../../inputs/MetricApplicationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationCreateInput, { nullable: false })
  data!: MetricApplicationCreateInput;
}
