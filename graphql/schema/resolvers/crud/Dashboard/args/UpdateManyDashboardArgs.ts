import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardUpdateManyMutationInput } from "../../../inputs/DashboardUpdateManyMutationInput";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDashboardArgs {
  @TypeGraphQL.Field(() => DashboardUpdateManyMutationInput, { nullable: false })
  data!: DashboardUpdateManyMutationInput;

  @TypeGraphQL.Field(() => DashboardWhereInput, { nullable: true })
  where?: DashboardWhereInput | undefined;
}
