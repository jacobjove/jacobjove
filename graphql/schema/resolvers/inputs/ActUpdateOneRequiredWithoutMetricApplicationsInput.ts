import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutMetricApplicationsInput } from "../inputs/ActCreateOrConnectWithoutMetricApplicationsInput";
import { ActCreateWithoutMetricApplicationsInput } from "../inputs/ActCreateWithoutMetricApplicationsInput";
import { ActUpdateWithoutMetricApplicationsInput } from "../inputs/ActUpdateWithoutMetricApplicationsInput";
import { ActUpsertWithoutMetricApplicationsInput } from "../inputs/ActUpsertWithoutMetricApplicationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutMetricApplicationsInput", {
  isAbstract: true,
})
export class ActUpdateOneRequiredWithoutMetricApplicationsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutMetricApplicationsInput, { nullable: true })
  create?: ActCreateWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutMetricApplicationsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpsertWithoutMetricApplicationsInput, { nullable: true })
  upsert?: ActUpsertWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutMetricApplicationsInput, { nullable: true })
  update?: ActUpdateWithoutMetricApplicationsInput | undefined;
}
