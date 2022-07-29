import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyActInputEnvelope } from "../inputs/ActionScheduleTemplateCreateManyActInputEnvelope";
import { ActionScheduleTemplateCreateOrConnectWithoutActInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActInput";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateWithoutActInput], { nullable: true })
  create?: ActionScheduleTemplateCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleTemplateCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;
}
