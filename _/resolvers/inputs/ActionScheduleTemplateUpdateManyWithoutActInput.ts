import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateManyActInputEnvelope } from "../inputs/ActionScheduleTemplateCreateManyActInputEnvelope";
import { ActionScheduleTemplateCreateOrConnectWithoutActInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActInput";
import { ActionScheduleTemplateCreateWithoutActInput } from "../inputs/ActionScheduleTemplateCreateWithoutActInput";
import { ActionScheduleTemplateScalarWhereInput } from "../inputs/ActionScheduleTemplateScalarWhereInput";
import { ActionScheduleTemplateUpdateManyWithWhereWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateManyWithWhereWithoutActInput";
import { ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput } from "../inputs/ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput";
import { ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput } from "../inputs/ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyWithoutActInput", { isAbstract: true })
export class ActionScheduleTemplateUpdateManyWithoutActInput {
  @TypeGraphQL.Field(() => [ActionScheduleTemplateCreateWithoutActInput], { nullable: true })
  create?: ActionScheduleTemplateCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  upsert?: ActionScheduleTemplateUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleTemplateCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  set?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  disconnect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  delete?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  update?: ActionScheduleTemplateUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateUpdateManyWithWhereWithoutActInput], {
    nullable: true,
  })
  updateMany?: ActionScheduleTemplateUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateScalarWhereInput], { nullable: true })
  deleteMany?: ActionScheduleTemplateScalarWhereInput[] | undefined;
}
