import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricUpdateWithoutApplicationsInput } from "../inputs/MetricUpdateWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricUpsertWithoutApplicationsInput", { isAbstract: true })
export class MetricUpsertWithoutApplicationsInput {
  @TypeGraphQL.Field(() => MetricUpdateWithoutApplicationsInput, { nullable: false })
  update!: MetricUpdateWithoutApplicationsInput;

  @TypeGraphQL.Field(() => MetricCreateWithoutApplicationsInput, { nullable: false })
  create!: MetricCreateWithoutApplicationsInput;
}
