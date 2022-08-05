import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AccountUpdateManyMutationInput", { isAbstract: true })
export class AccountUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  provider?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  accessToken?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  refreshToken?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  accessTokenExpiry?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  syncToken?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  scopes?: string[] | undefined;
}
