import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateOrConnectWithoutApplicationsInput } from "../inputs/MetricCreateOrConnectWithoutApplicationsInput";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateNestedOneWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricCreateNestedOneWithoutApplicationsInput {
  @TypeGraphQL.Field(() => MetricCreateWithoutApplicationsInput, { nullable: true })
  create?: MetricCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(() => MetricCreateOrConnectWithoutApplicationsInput, { nullable: true })
  connectOrCreate?: MetricCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(() => MetricWhereUniqueInput, { nullable: true })
  connect?: MetricWhereUniqueInput | undefined;
}
