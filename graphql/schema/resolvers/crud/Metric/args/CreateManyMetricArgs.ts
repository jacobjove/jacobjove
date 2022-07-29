import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateManyInput } from "../../../inputs/MetricCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMetricArgs {
  @TypeGraphQL.Field((_type) => [MetricCreateManyInput], { nullable: false })
  data!: MetricCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
