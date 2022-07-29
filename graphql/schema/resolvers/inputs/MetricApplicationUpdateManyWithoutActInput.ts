import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyActInputEnvelope } from "../inputs/MetricApplicationCreateManyActInputEnvelope";
import { MetricApplicationCreateOrConnectWithoutActInput } from "../inputs/MetricApplicationCreateOrConnectWithoutActInput";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationScalarWhereInput } from "../inputs/MetricApplicationScalarWhereInput";
import { MetricApplicationUpdateManyWithWhereWithoutActInput } from "../inputs/MetricApplicationUpdateManyWithWhereWithoutActInput";
import { MetricApplicationUpdateWithWhereUniqueWithoutActInput } from "../inputs/MetricApplicationUpdateWithWhereUniqueWithoutActInput";
import { MetricApplicationUpsertWithWhereUniqueWithoutActInput } from "../inputs/MetricApplicationUpsertWithWhereUniqueWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpdateManyWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateManyWithoutActInput {
  @TypeGraphQL.Field(() => [MetricApplicationCreateWithoutActInput], { nullable: true })
  create?: MetricApplicationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationUpsertWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  upsert?: MetricApplicationUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => MetricApplicationCreateManyActInputEnvelope, { nullable: true })
  createMany?: MetricApplicationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  set?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  disconnect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  delete?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationUpdateWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  update?: MetricApplicationUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationUpdateManyWithWhereWithoutActInput], {
    nullable: true,
  })
  updateMany?: MetricApplicationUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereInput], { nullable: true })
  deleteMany?: MetricApplicationScalarWhereInput[] | undefined;
}
