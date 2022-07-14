import * as TypeGraphQL from "type-graphql";
import { ActionScheduleWhereInput } from "../inputs/ActionScheduleWhereInput";

@TypeGraphQL.InputType("ActionScheduleListRelationFilter", {
  isAbstract: true,
})
export class ActionScheduleListRelationFilter {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, {
    nullable: true,
  })
  every?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, {
    nullable: true,
  })
  some?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, {
    nullable: true,
  })
  none?: ActionScheduleWhereInput | undefined;
}
