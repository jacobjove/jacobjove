import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateInput } from "../../../inputs/MetricCreateInput";
import { MetricUpdateInput } from "../../../inputs/MetricUpdateInput";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricArgs {
  @TypeGraphQL.Field(() => MetricWhereUniqueInput, { nullable: false })
  where!: MetricWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricCreateInput, { nullable: false })
  create!: MetricCreateInput;

  @TypeGraphQL.Field(() => MetricUpdateInput, { nullable: false })
  update!: MetricUpdateInput;
}
