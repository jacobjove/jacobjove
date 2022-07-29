import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope } from "../inputs/ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope";
import { ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput";
import { ActionScheduleTemplateCreateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateNestedManyWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateNestedManyWithoutScheduleTemplateInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateWithoutScheduleTemplateInput], {
    nullable: true,
  })
  create?: ActionScheduleTemplateCreateWithoutScheduleTemplateInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput],
    {
      nullable: true,
    }
  )
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;
}
