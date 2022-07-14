import * as TypeGraphQL from "type-graphql";
import { DashboardScalarWhereInput } from "../inputs/DashboardScalarWhereInput";
import { DashboardUpdateManyMutationInput } from "../inputs/DashboardUpdateManyMutationInput";

@TypeGraphQL.InputType("DashboardUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class DashboardUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => DashboardScalarWhereInput, {
    nullable: false,
  })
  where!: DashboardScalarWhereInput;

  @TypeGraphQL.Field((_type) => DashboardUpdateManyMutationInput, {
    nullable: false,
  })
  data!: DashboardUpdateManyMutationInput;
}
