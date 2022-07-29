import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutMetricApplicationsInput } from "../inputs/ActCreateOrConnectWithoutMetricApplicationsInput";
import { ActCreateWithoutMetricApplicationsInput } from "../inputs/ActCreateWithoutMetricApplicationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActCreateNestedOneWithoutMetricApplicationsInput {
  @TypeGraphQL.Field(() => ActCreateWithoutMetricApplicationsInput, { nullable: true })
  create?: ActCreateWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutMetricApplicationsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;
}
