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
  @TypeGraphQL.Field(() => ActionCreateWithoutMetricRecordsInput, { nullable: true })
  create?: ActionCreateWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field(() => ActionCreateOrConnectWithoutMetricRecordsInput, { nullable: true })
  connectOrCreate?: ActionCreateOrConnectWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field(() => ActionUpsertWithoutMetricRecordsInput, { nullable: true })
  upsert?: ActionUpsertWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: true })
  connect?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActionUpdateWithoutMetricRecordsInput, { nullable: true })
  update?: ActionUpdateWithoutMetricRecordsInput | undefined;
}
