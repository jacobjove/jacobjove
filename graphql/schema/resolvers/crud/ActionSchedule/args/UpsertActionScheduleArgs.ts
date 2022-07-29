import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateInput } from "../../../inputs/ActionScheduleCreateInput";
import { ActionScheduleUpdateInput } from "../../../inputs/ActionScheduleUpdateInput";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActionScheduleArgs {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateInput, { nullable: false })
  create!: ActionScheduleCreateInput;

  @TypeGraphQL.Field(() => ActionScheduleUpdateInput, { nullable: false })
  update!: ActionScheduleUpdateInput;
}
