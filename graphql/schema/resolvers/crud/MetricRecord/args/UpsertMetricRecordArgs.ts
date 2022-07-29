import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateInput } from "../../../inputs/MetricRecordCreateInput";
import { MetricRecordUpdateInput } from "../../../inputs/MetricRecordUpdateInput";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricRecordArgs {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordCreateInput, { nullable: false })
  create!: MetricRecordCreateInput;

  @TypeGraphQL.Field(() => MetricRecordUpdateInput, { nullable: false })
  update!: MetricRecordUpdateInput;
}
