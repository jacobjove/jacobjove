import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutMetricApplicationsInput } from "../inputs/ActCreateWithoutMetricApplicationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutMetricApplicationsInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActCreateWithoutMetricApplicationsInput, { nullable: false })
  create!: ActCreateWithoutMetricApplicationsInput;
}
