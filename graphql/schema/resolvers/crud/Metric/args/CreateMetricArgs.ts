import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateInput } from "../../../inputs/MetricCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricArgs {
  @TypeGraphQL.Field((_type) => MetricCreateInput, { nullable: false })
  data!: MetricCreateInput;
}
