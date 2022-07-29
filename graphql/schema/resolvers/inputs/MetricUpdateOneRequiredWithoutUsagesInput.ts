import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricCreateOrConnectWithoutUsagesInput } from "../inputs/MetricCreateOrConnectWithoutUsagesInput";
import { MetricCreateWithoutUsagesInput } from "../inputs/MetricCreateWithoutUsagesInput";
import { MetricUpdateWithoutUsagesInput } from "../inputs/MetricUpdateWithoutUsagesInput";
import { MetricUpsertWithoutUsagesInput } from "../inputs/MetricUpsertWithoutUsagesInput";
import { MetricWhereUniqueInput } from "../inputs/MetricWhereUniqueInput";

@TypeGraphQL.InputType("MetricUpdateOneRequiredWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricUpdateOneRequiredWithoutUsagesInput {
  @TypeGraphQL.Field((_type) => MetricCreateWithoutUsagesInput, { nullable: true })
  create?: MetricCreateWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricCreateOrConnectWithoutUsagesInput, { nullable: true })
  connectOrCreate?: MetricCreateOrConnectWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpsertWithoutUsagesInput, { nullable: true })
  upsert?: MetricUpsertWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, { nullable: true })
  connect?: MetricWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpdateWithoutUsagesInput, { nullable: true })
  update?: MetricUpdateWithoutUsagesInput | undefined;
}
