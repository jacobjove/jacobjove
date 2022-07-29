import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateManyInput } from "../../../inputs/MetricCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMetricArgs {
  @TypeGraphQL.Field(() => [MetricCreateManyInput], { nullable: false })
  data!: MetricCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
