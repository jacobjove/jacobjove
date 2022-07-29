import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleWhereInput } from "../../../inputs/ActionScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, { nullable: true })
  where?: ActionScheduleWhereInput | undefined;
}
