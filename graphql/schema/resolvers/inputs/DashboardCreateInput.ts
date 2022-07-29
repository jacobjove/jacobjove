import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardLayouts } from "../../models/Dashboard";
import { DateTimeScalar } from "../../scalars";
import { UserCreateNestedOneWithoutDashboardsInput } from "../inputs/UserCreateNestedOneWithoutDashboardsInput";

@TypeGraphQL.InputType("DashboardCreateInput", {
  isAbstract: true,
})
export class DashboardCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  layouts?: DashboardLayouts | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isDefault?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutDashboardsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutDashboardsInput;
}
