import * as TypeGraphQL from "type-graphql";
import { MetricCreateWithoutUsagesInput } from "../inputs/MetricCreateWithoutUsagesInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricCreateOrConnectWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricCreateOrConnectWithoutUsagesInput {
  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricCreateWithoutUsagesInput, {
    nullable: false,
  })
  create!: MetricCreateWithoutUsagesInput;
}
