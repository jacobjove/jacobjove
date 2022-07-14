import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { MetricCreateNestedOneWithoutApplicationsInput } from "../inputs/MetricCreateNestedOneWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationCreateWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationCreateWithoutActInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => MetricCreateNestedOneWithoutApplicationsInput, {
    nullable: false,
  })
  metric!: MetricCreateNestedOneWithoutApplicationsInput;
}
