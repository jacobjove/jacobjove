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
  @TypeGraphQL.Field(() => [MetricUsageCreateWithoutHabitInput], { nullable: true })
  create?: MetricUsageCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageUpsertWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  upsert?: MetricUsageUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: MetricUsageCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereUniqueInput], { nullable: true })
  set?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereUniqueInput], { nullable: true })
  disconnect?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereUniqueInput], { nullable: true })
  delete?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereUniqueInput], { nullable: true })
  connect?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageUpdateWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  update?: MetricUsageUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageUpdateManyWithWhereWithoutHabitInput], {
    nullable: true,
  })
  updateMany?: MetricUsageUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageScalarWhereInput], { nullable: true })
  deleteMany?: MetricUsageScalarWhereInput[] | undefined;
}
