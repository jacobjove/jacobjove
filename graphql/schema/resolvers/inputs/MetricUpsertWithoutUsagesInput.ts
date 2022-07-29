import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateWithoutUsagesInput } from "../inputs/MetricCreateWithoutUsagesInput";
import { MetricUpdateWithoutUsagesInput } from "../inputs/MetricUpdateWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUpsertWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricUpsertWithoutUsagesInput {
  @TypeGraphQL.Field(() => MetricUpdateWithoutUsagesInput, { nullable: false })
  update!: MetricUpdateWithoutUsagesInput;

  @TypeGraphQL.Field(() => MetricCreateWithoutUsagesInput, { nullable: false })
  create!: MetricCreateWithoutUsagesInput;
}
