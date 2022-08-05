import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AccountCreateManyscopesInput } from "../inputs/AccountCreateManyscopesInput";

@TypeGraphQL.InputType("AccountCreateManyInput", { isAbstract: true })
export class AccountCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accessToken?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  accessTokenExpiry?: Date | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => AccountCreateManyscopesInput, { nullable: true })
  scopes?: AccountCreateManyscopesInput | undefined;
}
