import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyActInputEnvelope } from "../inputs/MetricApplicationCreateManyActInputEnvelope";
import { MetricApplicationCreateOrConnectWithoutActInput } from "../inputs/MetricApplicationCreateOrConnectWithoutActInput";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateNestedManyWithoutActInput", { isAbstract: true })
export class MetricApplicationCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field(() => [MetricApplicationCreateWithoutActInput], { nullable: true })
  create?: MetricApplicationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => MetricApplicationCreateManyActInputEnvelope, { nullable: true })
  createMany?: MetricApplicationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;
}
