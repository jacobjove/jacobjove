import * as TypeGraphQL from "type-graphql";
import { MetricCreateInput } from "../../../inputs/MetricCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricArgs {
  @TypeGraphQL.Field((_type) => MetricCreateInput, {
    nullable: false,
  })
  data!: MetricCreateInput;
}
