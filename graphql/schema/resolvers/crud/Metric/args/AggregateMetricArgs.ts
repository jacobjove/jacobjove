import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricOrderByWithRelationInput } from "../../../inputs/MetricOrderByWithRelationInput";
import { MetricWhereInput } from "../../../inputs/MetricWhereInput";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMetricArgs {
  @TypeGraphQL.Field(() => MetricWhereInput, { nullable: true })
  where?: MetricWhereInput | undefined;

  @TypeGraphQL.Field(() => [MetricOrderByWithRelationInput], { nullable: true })
  orderBy?: MetricOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => MetricWhereUniqueInput, { nullable: true })
  cursor?: MetricWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
