import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricWhereInput } from "../../../inputs/MetricWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricArgs {
  @TypeGraphQL.Field(() => MetricWhereInput, { nullable: true })
  where?: MetricWhereInput | undefined;
}
