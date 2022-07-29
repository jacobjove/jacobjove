import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateOrConnectWithoutMetricRecordsInput } from "../inputs/ActionCreateOrConnectWithoutMetricRecordsInput";
import { ActionCreateWithoutMetricRecordsInput } from "../inputs/ActionCreateWithoutMetricRecordsInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateNestedOneWithoutMetricRecordsInput", {
  isAbstract: true,
})
export class ActionCreateNestedOneWithoutMetricRecordsInput {
  @TypeGraphQL.Field((_type) => ActionCreateWithoutMetricRecordsInput, { nullable: true })
  create?: ActionCreateWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionCreateOrConnectWithoutMetricRecordsInput, { nullable: true })
  connectOrCreate?: ActionCreateOrConnectWithoutMetricRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, { nullable: true })
  connect?: ActionWhereUniqueInput | undefined;
}
