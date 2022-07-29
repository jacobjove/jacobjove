import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricCreateNestedOneWithoutApplicationsInput } from "../inputs/MetricCreateNestedOneWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationCreateWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationCreateWithoutActInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricCreateNestedOneWithoutApplicationsInput, { nullable: false })
  metric!: MetricCreateNestedOneWithoutApplicationsInput;
}
