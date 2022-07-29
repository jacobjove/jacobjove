import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutMetricApplicationsInput } from "../inputs/ActUpdateOneRequiredWithoutMetricApplicationsInput";
import { MetricUpdateOneRequiredWithoutApplicationsInput } from "../inputs/MetricUpdateOneRequiredWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationUpdateInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutMetricApplicationsInput, {
    nullable: true,
  })
  act?: ActUpdateOneRequiredWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field(() => MetricUpdateOneRequiredWithoutApplicationsInput, { nullable: true })
  metric?: MetricUpdateOneRequiredWithoutApplicationsInput | undefined;
}
