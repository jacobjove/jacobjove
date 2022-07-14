import * as TypeGraphQL from "type-graphql";
import { MetricCreateWithoutUsagesInput } from "../inputs/MetricCreateWithoutUsagesInput";
import { MetricUpdateWithoutUsagesInput } from "../inputs/MetricUpdateWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUpsertWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricUpsertWithoutUsagesInput {
  @TypeGraphQL.Field((_type) => MetricUpdateWithoutUsagesInput, {
    nullable: false,
  })
  update!: MetricUpdateWithoutUsagesInput;

  @TypeGraphQL.Field((_type) => MetricCreateWithoutUsagesInput, {
    nullable: false,
  })
  create!: MetricCreateWithoutUsagesInput;
}
