import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { UserCreateNestedOneWithoutDashboardsInput } from "../inputs/UserCreateNestedOneWithoutDashboardsInput";

@TypeGraphQL.InputType("DashboardCreateInput", {
  isAbstract: true,
})
export class DashboardCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  layouts?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isDefault?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutDashboardsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutDashboardsInput;
}
