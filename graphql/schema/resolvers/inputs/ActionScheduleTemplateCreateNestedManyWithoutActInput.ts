import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyActInputEnvelope } from "../inputs/ActionScheduleTemplateCreateManyActInputEnvelope";
import { ActionScheduleTemplateCreateOrConnectWithoutActInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActInput";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field(() => [ActionScheduleTemplateCreateWithoutActInput], { nullable: true })
  create?: ActionScheduleTemplateCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleTemplateCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;
}
