import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardScalarWhereInput } from "../inputs/DashboardScalarWhereInput";
import { DashboardUpdateManyMutationInput } from "../inputs/DashboardUpdateManyMutationInput";

@TypeGraphQL.InputType("DashboardUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class DashboardUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(() => DashboardScalarWhereInput, { nullable: false })
  where!: DashboardScalarWhereInput;

  @TypeGraphQL.Field(() => DashboardUpdateManyMutationInput, { nullable: false })
  data!: DashboardUpdateManyMutationInput;
}
