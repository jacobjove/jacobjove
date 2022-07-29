import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [ActionScheduleCreateWithoutTemplateInput], { nullable: true })
  create?: ActionScheduleCreateWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleCreateOrConnectWithoutTemplateInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput], {
    nullable: true,
  })
  upsert?: ActionScheduleUpsertWithWhereUniqueWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => ActionScheduleCreateManyTemplateInputEnvelope, { nullable: true })
  createMany?: ActionScheduleCreateManyTemplateInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereUniqueInput], { nullable: true })
  set?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereUniqueInput], { nullable: true })
  disconnect?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereUniqueInput], { nullable: true })
  delete?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput], {
    nullable: true,
  })
  update?: ActionScheduleUpdateWithWhereUniqueWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleUpdateManyWithWhereWithoutTemplateInput], {
    nullable: true,
  })
  updateMany?: ActionScheduleUpdateManyWithWhereWithoutTemplateInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleScalarWhereInput], { nullable: true })
  deleteMany?: ActionScheduleScalarWhereInput[] | undefined;
}
