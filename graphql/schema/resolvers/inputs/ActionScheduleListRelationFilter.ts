import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleWhereInput } from "../inputs/ActionScheduleWhereInput";

@TypeGraphQL.InputType("ActionScheduleListRelationFilter", {
  isAbstract: true,
})
export class ActionScheduleListRelationFilter {
  @TypeGraphQL.Field(() => ActionScheduleWhereInput, { nullable: true })
  every?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleWhereInput, { nullable: true })
  some?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleWhereInput, { nullable: true })
  none?: ActionScheduleWhereInput | undefined;
}
