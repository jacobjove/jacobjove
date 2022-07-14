import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateManyTemplateInputEnvelope } from "../inputs/ActionScheduleCreateManyTemplateInputEnvelope";
import { ActionScheduleCreateOrConnectWithoutTemplateInput } from "../inputs/ActionScheduleCreateOrConnectWithoutTemplateInput";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateNestedManyWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleCreateNestedManyWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleCreateWithoutTemplateInput], {
    nullable: true,
  })
  create?: ActionScheduleCreateWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleCreateOrConnectWithoutTemplateInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateManyTemplateInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleCreateManyTemplateInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;
}
