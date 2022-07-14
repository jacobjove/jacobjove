import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateManyTemplateInputEnvelope } from "../inputs/ActionScheduleCreateManyTemplateInputEnvelope";
import { ActionScheduleCreateOrConnectWithoutTemplateInput } from "../inputs/ActionScheduleCreateOrConnectWithoutTemplateInput";
import { ActionScheduleCreateWithoutTemplateInput } from "../inputs/ActionScheduleCreateWithoutTemplateInput";
import { ActionScheduleScalarWhereInput } from "../inputs/ActionScheduleScalarWhereInput";
import { ActionScheduleUpdateManyWithWhereWithoutTemplateInput } from "../inputs/ActionScheduleUpdateManyWithWhereWithoutTemplateInput";
import { ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput } from "../inputs/ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput";
import { ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput } from "../inputs/ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateManyWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateManyWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleCreateWithoutTemplateInput], {
    nullable: true,
  })
  create?: ActionScheduleCreateWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleCreateOrConnectWithoutTemplateInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput], {
    nullable: true,
  })
  upsert?: ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateManyTemplateInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleCreateManyTemplateInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], {
    nullable: true,
  })
  set?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], {
    nullable: true,
  })
  delete?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput], {
    nullable: true,
  })
  update?: ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleUpdateManyWithWhereWithoutTemplateInput], {
    nullable: true,
  })
  updateMany?: ActionScheduleUpdateManyWithWhereWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActionScheduleScalarWhereInput[] | undefined;
}
