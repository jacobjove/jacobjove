import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateInput } from "../../../inputs/ActionScheduleCreateInput";
import { ActionScheduleUpdateInput } from "../../../inputs/ActionScheduleUpdateInput";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateInput, { nullable: false })
  create!: ActionScheduleCreateInput;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateInput, { nullable: false })
  update!: ActionScheduleUpdateInput;
}
