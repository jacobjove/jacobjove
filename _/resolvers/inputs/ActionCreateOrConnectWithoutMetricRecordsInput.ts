import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateWithoutMetricRecordsInput } from "../inputs/ActionCreateWithoutMetricRecordsInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateOrConnectWithoutMetricRecordsInput", { isAbstract: true })
export class ActionCreateOrConnectWithoutMetricRecordsInput {
  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionCreateWithoutMetricRecordsInput, { nullable: false })
  create!: ActionCreateWithoutMetricRecordsInput;
}
