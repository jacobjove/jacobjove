import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutMetricApplicationsInput } from "../inputs/ActCreateNestedOneWithoutMetricApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationCreateWithoutMetricInput", { isAbstract: true })
export class MetricApplicationCreateWithoutMetricInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutMetricApplicationsInput, { nullable: false })
  act!: ActCreateNestedOneWithoutMetricApplicationsInput;
}
