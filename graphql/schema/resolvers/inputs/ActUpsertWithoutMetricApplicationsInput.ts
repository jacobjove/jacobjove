import * as TypeGraphQL from "type-graphql";
import { ActCreateWithoutMetricApplicationsInput } from "../inputs/ActCreateWithoutMetricApplicationsInput";
import { ActUpdateWithoutMetricApplicationsInput } from "../inputs/ActUpdateWithoutMetricApplicationsInput";

@TypeGraphQL.InputType("ActUpsertWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutMetricApplicationsInput {
  @TypeGraphQL.Field((_type) => ActUpdateWithoutMetricApplicationsInput, {
    nullable: false,
  })
  update!: ActUpdateWithoutMetricApplicationsInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutMetricApplicationsInput, {
    nullable: false,
  })
  create!: ActCreateWithoutMetricApplicationsInput;
}
