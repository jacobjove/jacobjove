import * as TypeGraphQL from "type-graphql";
import { DashboardUpdateManyMutationInput } from "../../../inputs/DashboardUpdateManyMutationInput";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardUpdateManyMutationInput, {
    nullable: false,
  })
  data!: DashboardUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => DashboardWhereInput, {
    nullable: true,
  })
  where?: DashboardWhereInput | undefined;
}
