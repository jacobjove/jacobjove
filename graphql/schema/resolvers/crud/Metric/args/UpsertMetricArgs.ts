import * as TypeGraphQL from "type-graphql";
import { MetricCreateInput } from "../../../inputs/MetricCreateInput";
import { MetricUpdateInput } from "../../../inputs/MetricUpdateInput";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricArgs {
  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricCreateInput, {
    nullable: false,
  })
  create!: MetricCreateInput;

  @TypeGraphQL.Field((_type) => MetricUpdateInput, {
    nullable: false,
  })
  update!: MetricUpdateInput;
}
