import * as TypeGraphQL from "type-graphql";
import { MetricApplicationCreateInput } from "../../../inputs/MetricApplicationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationCreateInput, {
    nullable: false,
  })
  data!: MetricApplicationCreateInput;
}
