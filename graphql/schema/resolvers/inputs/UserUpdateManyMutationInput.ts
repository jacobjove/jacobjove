import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateManyMutationInput", {
  isAbstract: true,
})
export class UserUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  email?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  emailVerified?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  image?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isAdmin?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  settings?: Record<string, string> | undefined;

  @TypeGraphQL.Field({ nullable: true })
  lastLogin?: Date | null | undefined;
}
