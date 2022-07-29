import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;
}
