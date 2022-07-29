import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateOrConnectWithoutApplicationsInput } from "../inputs/MetricCreateOrConnectWithoutApplicationsInput";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricUpdateWithoutApplicationsInput } from "../inputs/MetricUpdateWithoutApplicationsInput";
import { MetricUpsertWithoutApplicationsInput } from "../inputs/MetricUpsertWithoutApplicationsInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricUpdateOneRequiredWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricUpdateOneRequiredWithoutApplicationsInput {
  @TypeGraphQL.Field(() => MetricCreateWithoutApplicationsInput, { nullable: true })
  create?: MetricCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(() => MetricCreateOrConnectWithoutApplicationsInput, { nullable: true })
  connectOrCreate?: MetricCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(() => MetricUpsertWithoutApplicationsInput, { nullable: true })
  upsert?: MetricUpsertWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(() => MetricWhereUniqueInput, { nullable: true })
  connect?: MetricWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => MetricUpdateWithoutApplicationsInput, { nullable: true })
  update?: MetricUpdateWithoutApplicationsInput | undefined;
}
