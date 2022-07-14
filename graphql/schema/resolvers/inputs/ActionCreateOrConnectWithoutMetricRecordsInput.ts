import * as TypeGraphQL from "type-graphql";
import { ActionCreateWithoutMetricRecordsInput } from "../inputs/ActionCreateWithoutMetricRecordsInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateOrConnectWithoutMetricRecordsInput", {
  isAbstract: true,
})
export class ActionCreateOrConnectWithoutMetricRecordsInput {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionCreateWithoutMetricRecordsInput, {
    nullable: false,
  })
  create!: ActionCreateWithoutMetricRecordsInput;
}
