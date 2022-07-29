import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardLayouts } from "../../models/Dashboard";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DashboardUpdateWithoutUserInput", {
  isAbstract: true,
})
export class DashboardUpdateWithoutUserInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  layouts?: DashboardLayouts | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isDefault?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
