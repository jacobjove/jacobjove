import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardWhereInput, { nullable: true })
  where?: DashboardWhereInput | undefined;
}
