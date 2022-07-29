import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutMetricApplicationsInput } from "../inputs/ActUpdateOneRequiredWithoutMetricApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationUpdateWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateWithoutMetricInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutMetricApplicationsInput, {
    nullable: true,
  })
  act?: ActUpdateOneRequiredWithoutMetricApplicationsInput | undefined;
}
