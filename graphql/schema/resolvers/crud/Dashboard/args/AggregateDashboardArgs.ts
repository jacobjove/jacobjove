import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardOrderByWithRelationInput } from "../../../inputs/DashboardOrderByWithRelationInput";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDashboardArgs {
  @TypeGraphQL.Field(() => DashboardWhereInput, { nullable: true })
  where?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field(() => [DashboardOrderByWithRelationInput], { nullable: true })
  orderBy?: DashboardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: true })
  cursor?: DashboardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
