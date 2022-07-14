import * as TypeGraphQL from "type-graphql";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricUpdateWithoutApplicationsInput } from "../inputs/MetricUpdateWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricUpsertWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricUpsertWithoutApplicationsInput {
  @TypeGraphQL.Field((_type) => MetricUpdateWithoutApplicationsInput, {
    nullable: false,
  })
  update!: MetricUpdateWithoutApplicationsInput;

  @TypeGraphQL.Field((_type) => MetricCreateWithoutApplicationsInput, {
    nullable: false,
  })
  create!: MetricCreateWithoutApplicationsInput;
}
