import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationWhereInput, { nullable: true })
  where?: MetricApplicationWhereInput | undefined;
}
