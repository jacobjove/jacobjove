import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutMetricApplicationsInput } from "../inputs/ActCreateWithoutMetricApplicationsInput";
import { ActUpdateWithoutMetricApplicationsInput } from "../inputs/ActUpdateWithoutMetricApplicationsInput";

@TypeGraphQL.InputType("ActUpsertWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutMetricApplicationsInput {
  @TypeGraphQL.Field(() => ActUpdateWithoutMetricApplicationsInput, { nullable: false })
  update!: ActUpdateWithoutMetricApplicationsInput;

  @TypeGraphQL.Field(() => ActCreateWithoutMetricApplicationsInput, { nullable: false })
  create!: ActCreateWithoutMetricApplicationsInput;
}
