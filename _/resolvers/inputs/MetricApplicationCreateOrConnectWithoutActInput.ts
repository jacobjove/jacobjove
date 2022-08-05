import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateOrConnectWithoutActInput", { isAbstract: true })
export class MetricApplicationCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricApplicationCreateWithoutActInput, { nullable: false })
  create!: MetricApplicationCreateWithoutActInput;
}
