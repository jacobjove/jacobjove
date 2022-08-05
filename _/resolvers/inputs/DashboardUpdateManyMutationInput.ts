import { DashboardLayouts } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("DashboardUpdateManyMutationInput", { isAbstract: true })
export class DashboardUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  layouts?: DashboardLayouts | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isDefault?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
