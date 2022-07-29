import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateOrConnectWithoutApplicationsInput } from "../inputs/MetricCreateOrConnectWithoutApplicationsInput";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateNestedOneWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricCreateNestedOneWithoutApplicationsInput {
  @TypeGraphQL.Field((_type) => MetricCreateWithoutApplicationsInput, { nullable: true })
  create?: MetricCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricCreateOrConnectWithoutApplicationsInput, { nullable: true })
  connectOrCreate?: MetricCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, { nullable: true })
  connect?: MetricWhereUniqueInput | undefined;
}
