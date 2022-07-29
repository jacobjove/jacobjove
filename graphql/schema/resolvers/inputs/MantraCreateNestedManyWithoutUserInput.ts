import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyUserInputEnvelope } from "../inputs/MantraCreateManyUserInputEnvelope";
import { MantraCreateOrConnectWithoutUserInput } from "../inputs/MantraCreateOrConnectWithoutUserInput";
import { MantraCreateWithoutUserInput } from "../inputs/MantraCreateWithoutUserInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class MantraCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [MantraCreateWithoutUserInput], { nullable: true })
  create?: MantraCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: MantraCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => MantraCreateManyUserInputEnvelope, { nullable: true })
  createMany?: MantraCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereUniqueInput], { nullable: true })
  connect?: MantraWhereUniqueInput[] | undefined;
}
