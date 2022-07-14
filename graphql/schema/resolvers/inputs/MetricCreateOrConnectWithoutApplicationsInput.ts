import * as TypeGraphQL from "type-graphql";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateOrConnectWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricCreateOrConnectWithoutApplicationsInput {
  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricCreateWithoutApplicationsInput, {
    nullable: false,
  })
  create!: MetricCreateWithoutApplicationsInput;
}
