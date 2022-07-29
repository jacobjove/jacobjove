import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateOrConnectWithoutUsagesInput } from "../inputs/MetricCreateOrConnectWithoutUsagesInput";
import { MetricCreateWithoutUsagesInput } from "../inputs/MetricCreateWithoutUsagesInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateNestedOneWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricCreateNestedOneWithoutUsagesInput {
  @TypeGraphQL.Field((_type) => MetricCreateWithoutUsagesInput, { nullable: true })
  create?: MetricCreateWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricCreateOrConnectWithoutUsagesInput, { nullable: true })
  connectOrCreate?: MetricCreateOrConnectWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, { nullable: true })
  connect?: MetricWhereUniqueInput | undefined;
}
