import * as TypeGraphQL from "type-graphql";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleWhereUniqueInput;
}
