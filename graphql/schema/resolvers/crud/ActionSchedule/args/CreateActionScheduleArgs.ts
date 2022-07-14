import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateInput } from "../../../inputs/ActionScheduleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleCreateInput, {
    nullable: false,
  })
  data!: ActionScheduleCreateInput;
}
