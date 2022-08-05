import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateWithoutUsagesInput } from "../inputs/MetricCreateWithoutUsagesInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateOrConnectWithoutUsagesInput", { isAbstract: true })
export class MetricCreateOrConnectWithoutUsagesInput {
  @TypeGraphQL.Field(() => MetricWhereUniqueInput, { nullable: false })
  where!: MetricWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricCreateWithoutUsagesInput, { nullable: false })
  create!: MetricCreateWithoutUsagesInput;
}
