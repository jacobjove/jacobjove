import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateInput } from "../../../inputs/ActionScheduleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActionScheduleArgs {
  @TypeGraphQL.Field(() => ActionScheduleCreateInput, { nullable: false })
  data!: ActionScheduleCreateInput;
}
