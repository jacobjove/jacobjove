import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutMetricApplicationsInput } from "../inputs/ActCreateNestedOneWithoutMetricApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationCreateWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationCreateWithoutMetricInput {
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

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutMetricApplicationsInput, {
    nullable: false,
  })
  act!: ActCreateNestedOneWithoutMetricApplicationsInput;
}
