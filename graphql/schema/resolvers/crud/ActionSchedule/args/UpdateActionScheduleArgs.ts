import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateInput } from "../../../inputs/ActionScheduleUpdateInput";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleUpdateInput, { nullable: false })
  data!: ActionScheduleUpdateInput;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;
}
