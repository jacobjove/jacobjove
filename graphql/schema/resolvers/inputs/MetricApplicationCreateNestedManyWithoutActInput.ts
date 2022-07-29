import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyActInputEnvelope } from "../inputs/MetricApplicationCreateManyActInputEnvelope";
import { MetricApplicationCreateOrConnectWithoutActInput } from "../inputs/MetricApplicationCreateOrConnectWithoutActInput";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [MetricApplicationCreateWithoutActInput], { nullable: true })
  create?: MetricApplicationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateManyActInputEnvelope, { nullable: true })
  createMany?: MetricApplicationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], { nullable: true })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;
}
