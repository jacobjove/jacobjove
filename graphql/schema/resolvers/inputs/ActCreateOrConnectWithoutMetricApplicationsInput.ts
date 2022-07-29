import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutMetricApplicationsInput } from "../inputs/ActCreateWithoutMetricApplicationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutMetricApplicationsInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutMetricApplicationsInput, { nullable: false })
  create!: ActCreateWithoutMetricApplicationsInput;
}
