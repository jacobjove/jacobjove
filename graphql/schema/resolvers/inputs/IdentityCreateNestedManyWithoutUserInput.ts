import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateManyUserInputEnvelope } from "../inputs/IdentityCreateManyUserInputEnvelope";
import { IdentityCreateOrConnectWithoutUserInput } from "../inputs/IdentityCreateOrConnectWithoutUserInput";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class IdentityCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [IdentityCreateWithoutUserInput], { nullable: true })
  create?: IdentityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: IdentityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateManyUserInputEnvelope, { nullable: true })
  createMany?: IdentityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereUniqueInput], { nullable: true })
  connect?: IdentityWhereUniqueInput[] | undefined;
}
