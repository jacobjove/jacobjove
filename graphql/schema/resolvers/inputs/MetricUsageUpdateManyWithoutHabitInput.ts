import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyHabitInputEnvelope } from "../inputs/MetricUsageCreateManyHabitInputEnvelope";
import { MetricUsageCreateOrConnectWithoutHabitInput } from "../inputs/MetricUsageCreateOrConnectWithoutHabitInput";
import { MetricUsageCreateWithoutHabitInput } from "../inputs/MetricUsageCreateWithoutHabitInput";
import { MetricUsageScalarWhereInput } from "../inputs/MetricUsageScalarWhereInput";
import { MetricUsageUpdateManyWithWhereWithoutHabitInput } from "../inputs/MetricUsageUpdateManyWithWhereWithoutHabitInput";
import { MetricUsageUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/MetricUsageUpdateWithWhereUniqueWithoutHabitInput";
import { MetricUsageUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/MetricUsageUpsertWithWhereUniqueWithoutHabitInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateWithoutHabitInput], { nullable: true })
  create?: MetricUsageCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageUpsertWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  upsert?: MetricUsageUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: MetricUsageCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  set?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  disconnect?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  delete?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  connect?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageUpdateWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  update?: MetricUsageUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageUpdateManyWithWhereWithoutHabitInput], {
    nullable: true,
  })
  updateMany?: MetricUsageUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereInput], { nullable: true })
  deleteMany?: MetricUsageScalarWhereInput[] | undefined;
}
