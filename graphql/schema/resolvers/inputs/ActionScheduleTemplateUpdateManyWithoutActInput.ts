import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateCreateManyActInputEnvelope } from "../inputs/ActionScheduleTemplateCreateManyActInputEnvelope";
import { ActionScheduleTemplateCreateOrConnectWithoutActInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActInput";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateScalarWhereInput } from "../inputs/ActionScheduleTemplateScalarWhereInput";
import { ActionScheduleTemplateUpdateManyWithWhereWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateManyWithWhereWithoutActInput";
import { ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput";
import { ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput } from "../inputs/ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateWithoutActInput], {
    nullable: true,
  })
  create?: ActionScheduleTemplateCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  upsert?: ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleTemplateCreateManyActInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  update?: ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateUpdateManyWithWhereWithoutActInput], {
    nullable: true,
  })
  updateMany?: ActionScheduleTemplateUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleTemplateScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActionScheduleTemplateScalarWhereInput[] | undefined;
}
