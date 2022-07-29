import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateInput } from "../../../inputs/MetricRecordCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricRecordArgs {
  @TypeGraphQL.Field(() => MetricRecordCreateInput, { nullable: false })
  data!: MetricRecordCreateInput;
}
