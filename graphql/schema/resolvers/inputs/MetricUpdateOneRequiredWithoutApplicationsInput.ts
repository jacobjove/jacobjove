import * as TypeGraphQL from "type-graphql";
import { MetricCreateOrConnectWithoutApplicationsInput } from "../inputs/MetricCreateOrConnectWithoutApplicationsInput";
import { MetricCreateWithoutApplicationsInput } from "../inputs/MetricCreateWithoutApplicationsInput";
import { MetricUpdateWithoutApplicationsInput } from "../inputs/MetricUpdateWithoutApplicationsInput";
import { MetricUpsertWithoutApplicationsInput } from "../inputs/MetricUpsertWithoutApplicationsInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricUpdateOneRequiredWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricUpdateOneRequiredWithoutApplicationsInput {
  @TypeGraphQL.Field((_type) => MetricCreateWithoutApplicationsInput, {
    nullable: true,
  })
  create?: MetricCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricCreateOrConnectWithoutApplicationsInput, {
    nullable: true,
  })
  connectOrCreate?: MetricCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpsertWithoutApplicationsInput, {
    nullable: true,
  })
  upsert?: MetricUpsertWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, {
    nullable: true,
  })
  connect?: MetricWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpdateWithoutApplicationsInput, {
    nullable: true,
  })
  update?: MetricUpdateWithoutApplicationsInput | undefined;
}
