import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutMetricApplicationsInput } from "../inputs/ActCreateNestedOneWithoutMetricApplicationsInput";
import { MetricCreateNestedOneWithoutApplicationsInput } from "../inputs/MetricCreateNestedOneWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationCreateInput", {
  isAbstract: true,
})
export class MetricApplicationCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutMetricApplicationsInput, {
    nullable: false,
  })
  act!: ActCreateNestedOneWithoutMetricApplicationsInput;

  @TypeGraphQL.Field((_type) => MetricCreateNestedOneWithoutApplicationsInput, { nullable: false })
  metric!: MetricCreateNestedOneWithoutApplicationsInput;
}
