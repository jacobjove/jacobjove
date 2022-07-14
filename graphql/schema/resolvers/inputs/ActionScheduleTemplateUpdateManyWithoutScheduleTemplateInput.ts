import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope } from "../inputs/ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope";
import { ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutScheduleTemplateInput";
import { ActionScheduleTemplateCreateWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateWithoutScheduleTemplateInput";
import { ActionScheduleTemplateScalarWhereInput } from "../inputs/ActionScheduleTemplateScalarWhereInput";
import { ActionScheduleTemplateUpdateManyWithWhereWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateManyWithWhereWithoutScheduleTemplateInput";
import { ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput";
import { ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput {
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

  @TypeGraphQL.Field(
    (_type) => [ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput],
    {
      nullable: true,
    }
  )
  upsert?: ActionScheduleTemplateUpsertWithWhereUniqueWithoutScheduleTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleTemplateCreateManyScheduleTemplateInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereUniqueInput], {
    nullable: true,
  })
  set?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereUniqueInput], {
    nullable: true,
  })
  delete?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput],
    {
      nullable: true,
    }
  )
  update?: ActionScheduleTemplateUpdateWithWhereUniqueWithoutScheduleTemplateInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ActionScheduleTemplateUpdateManyWithWhereWithoutScheduleTemplateInput],
    {
      nullable: true,
    }
  )
  updateMany?: ActionScheduleTemplateUpdateManyWithWhereWithoutScheduleTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActionScheduleTemplateScalarWhereInput[] | undefined;
}
