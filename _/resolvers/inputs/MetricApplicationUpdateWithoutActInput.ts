import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUpdateOneRequiredWithoutApplicationsInput } from "../inputs/MetricUpdateOneRequiredWithoutApplicationsInput";

@TypeGraphQL.InputType("MetricApplicationUpdateWithoutActInput", { isAbstract: true })
export class MetricApplicationUpdateWithoutActInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricUpdateOneRequiredWithoutApplicationsInput, { nullable: true })
  metric?: MetricUpdateOneRequiredWithoutApplicationsInput | undefined;
}
