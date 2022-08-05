import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateManyUserInputEnvelope } from "../inputs/AccountCreateManyUserInputEnvelope";
import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedManyWithoutUserInput", { isAbstract: true })
export class AccountCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  create?: AccountCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: AccountCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  createMany?: AccountCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [AccountWhereUniqueInput], { nullable: true })
  connect?: AccountWhereUniqueInput[] | undefined;
}
