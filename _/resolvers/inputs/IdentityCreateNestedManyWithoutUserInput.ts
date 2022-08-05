import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateManyUserInputEnvelope } from "../inputs/IdentityCreateManyUserInputEnvelope";
import { IdentityCreateOrConnectWithoutUserInput } from "../inputs/IdentityCreateOrConnectWithoutUserInput";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateNestedManyWithoutUserInput", { isAbstract: true })
export class IdentityCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [IdentityCreateWithoutUserInput], { nullable: true })
  create?: IdentityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: IdentityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityCreateManyUserInputEnvelope, { nullable: true })
  createMany?: IdentityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereUniqueInput], { nullable: true })
  connect?: IdentityWhereUniqueInput[] | undefined;
}
