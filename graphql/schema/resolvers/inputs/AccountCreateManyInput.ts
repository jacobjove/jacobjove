import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AccountCreateManyscopesInput } from "../inputs/AccountCreateManyscopesInput";

@TypeGraphQL.InputType("AccountCreateManyInput", {
  isAbstract: true,
})
export class AccountCreateManyInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  accessToken?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  accessTokenExpiry?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  syncToken?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => AccountCreateManyscopesInput, { nullable: true })
  scopes?: AccountCreateManyscopesInput | undefined;
}
