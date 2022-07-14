import * as TypeGraphQL from "type-graphql";
import { DashboardScalarFieldEnum } from "../../../../enums/DashboardScalarFieldEnum";
import { DashboardOrderByWithRelationInput } from "../../../inputs/DashboardOrderByWithRelationInput";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyDashboardArgs {
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

  @TypeGraphQL.Field((_type) => [DashboardScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "name"
        | "userId"
        | "layouts"
        | "isDefault"
        | "isPublic"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
