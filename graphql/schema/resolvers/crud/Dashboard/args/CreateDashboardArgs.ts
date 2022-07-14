import * as TypeGraphQL from "type-graphql";
import { DashboardCreateInput } from "../../../inputs/DashboardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardCreateInput, {
    nullable: false,
  })
  data!: DashboardCreateInput;
}
