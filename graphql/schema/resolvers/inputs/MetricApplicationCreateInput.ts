import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutMetricApplicationsInput } from "../inputs/ActCreateNestedOneWithoutMetricApplicationsInput";
import { MetricCreateNestedOneWithoutApplicationsInput } from "../inputs/MetricCreateNestedOneWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationCreateInput", {
  isAbstract: true,
})
export class MetricApplicationCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutMetricApplicationsInput, {
    nullable: false,
  })
  act!: ActCreateNestedOneWithoutMetricApplicationsInput;

  @TypeGraphQL.Field(() => MetricCreateNestedOneWithoutApplicationsInput, { nullable: false })
  metric!: MetricCreateNestedOneWithoutApplicationsInput;
}
