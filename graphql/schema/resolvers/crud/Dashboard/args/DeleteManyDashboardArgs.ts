import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDashboardArgs {
  @TypeGraphQL.Field(() => DashboardWhereInput, { nullable: true })
  where?: DashboardWhereInput | undefined;
}
