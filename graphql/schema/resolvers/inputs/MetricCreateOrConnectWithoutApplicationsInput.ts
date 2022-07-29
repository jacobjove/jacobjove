import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateOrConnectWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricCreateOrConnectWithoutApplicationsInput {
  @TypeGraphQL.Field(() => MetricWhereUniqueInput, { nullable: false })
  where!: MetricWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricCreateWithoutApplicationsInput, { nullable: false })
  create!: MetricCreateWithoutApplicationsInput;
}
