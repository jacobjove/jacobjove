import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateManyUserInputEnvelope } from "../inputs/AccountCreateManyUserInputEnvelope";
import { AccountCreateOrConnectWithoutUserInput } from "../inputs/AccountCreateOrConnectWithoutUserInput";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountScalarWhereInput } from "../inputs/AccountScalarWhereInput";
import { AccountUpdateManyWithWhereWithoutUserInput } from "../inputs/AccountUpdateManyWithWhereWithoutUserInput";
import { AccountUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AccountUpdateWithWhereUniqueWithoutUserInput";
import { AccountUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AccountUpsertWithWhereUniqueWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class AccountUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  create?: AccountCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: AccountCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: AccountUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  createMany?: AccountCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [AccountWhereUniqueInput], { nullable: true })
  set?: AccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountWhereUniqueInput], { nullable: true })
  disconnect?: AccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountWhereUniqueInput], { nullable: true })
  delete?: AccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountWhereUniqueInput], { nullable: true })
  connect?: AccountWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: AccountUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: AccountUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountScalarWhereInput], { nullable: true })
  deleteMany?: AccountScalarWhereInput[] | undefined;
}
