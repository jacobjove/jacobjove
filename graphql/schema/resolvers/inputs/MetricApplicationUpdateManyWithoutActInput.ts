import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [MetricApplicationCreateWithoutActInput], {
    nullable: true,
  })
  create?: MetricApplicationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationUpsertWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  upsert?: MetricApplicationUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: MetricApplicationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  set?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  delete?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationUpdateWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  update?: MetricApplicationUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationUpdateManyWithWhereWithoutActInput], {
    nullable: true,
  })
  updateMany?: MetricApplicationUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MetricApplicationScalarWhereInput[] | undefined;
}
