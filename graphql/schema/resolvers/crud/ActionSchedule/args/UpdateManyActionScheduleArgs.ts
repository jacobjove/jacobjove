import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyMutationInput } from "../../../inputs/ActionScheduleUpdateManyMutationInput";
import { ActionScheduleWhereInput } from "../../../inputs/ActionScheduleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleUpdateManyMutationInput, { nullable: false })
  data!: ActionScheduleUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, { nullable: true })
  where?: ActionScheduleWhereInput | undefined;
}
