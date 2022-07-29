import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardLayouts } from "../../models/Dashboard";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("DashboardCreateWithoutUserInput", {
  isAbstract: true,
})
export class DashboardCreateWithoutUserInput {
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
}
