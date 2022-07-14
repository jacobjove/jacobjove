import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateOrConnectWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleCreateOrConnectWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutTemplateInput, {
    nullable: false,
  })
  create!: ActionScheduleCreateWithoutTemplateInput;
}
