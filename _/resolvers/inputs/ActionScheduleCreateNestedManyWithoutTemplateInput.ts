import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateManyTemplateInputEnvelope } from "../inputs/ActionScheduleCreateManyTemplateInputEnvelope";
import { ActionScheduleCreateOrConnectWithoutTemplateInput } from "../inputs/ActionScheduleCreateOrConnectWithoutTemplateInput";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateNestedManyWithoutTemplateInput", { isAbstract: true })
export class ActionScheduleCreateNestedManyWithoutTemplateInput {
  @TypeGraphQL.Field(() => [ActionScheduleCreateWithoutTemplateInput], { nullable: true })
  create?: ActionScheduleCreateWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleCreateOrConnectWithoutTemplateInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => ActionScheduleCreateManyTemplateInputEnvelope, { nullable: true })
  createMany?: ActionScheduleCreateManyTemplateInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;
}
