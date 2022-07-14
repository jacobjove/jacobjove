import * as TypeGraphQL from "type-graphql";
import { DashboardOrderByWithRelationInput } from "../../../inputs/DashboardOrderByWithRelationInput";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardWhereInput, {
    nullable: true,
  })
  where?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [DashboardOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: DashboardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => DashboardWhereUniqueInput, {
    nullable: true,
  })
  cursor?: DashboardWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
