import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateOrConnectWithoutMetricRecordsInput } from "../inputs/ActionCreateOrConnectWithoutMetricRecordsInput";
import { ActionCreateWithoutMetricRecordsInput } from "../inputs/ActionCreateWithoutMetricRecordsInput";
import { ActionUpdateWithoutMetricRecordsInput } from "../inputs/ActionUpdateWithoutMetricRecordsInput";
import { ActionUpsertWithoutMetricRecordsInput } from "../inputs/ActionUpsertWithoutMetricRecordsInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateOneRequiredWithoutMetricRecordsInput", {
  isAbstract: true,
})
export class ActionUpdateOneRequiredWithoutMetricRecordsInput {
  @TypeGraphQL.Field((_type) => ActionCreateWithoutMetricRecordsInput, { nullable: true })
  create?: ActionCreateWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionCreateOrConnectWithoutMetricRecordsInput, { nullable: true })
  connectOrCreate?: ActionCreateOrConnectWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionUpsertWithoutMetricRecordsInput, { nullable: true })
  upsert?: ActionUpsertWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, { nullable: true })
  connect?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActionUpdateWithoutMetricRecordsInput, { nullable: true })
  update?: ActionUpdateWithoutMetricRecordsInput | undefined;
}
