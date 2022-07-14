import * as TypeGraphQL from "type-graphql";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateOrConnectWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationCreateOrConnectWithoutActInput {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateWithoutActInput, {
    nullable: false,
  })
  create!: MetricApplicationCreateWithoutActInput;
}
