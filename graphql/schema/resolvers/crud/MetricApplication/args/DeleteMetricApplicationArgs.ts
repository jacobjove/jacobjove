import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;
}
