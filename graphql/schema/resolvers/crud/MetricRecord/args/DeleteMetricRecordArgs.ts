import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMetricRecordArgs {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;
}
