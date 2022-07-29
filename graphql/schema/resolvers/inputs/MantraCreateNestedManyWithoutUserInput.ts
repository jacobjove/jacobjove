import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyUserInputEnvelope } from "../inputs/MantraCreateManyUserInputEnvelope";
import { MantraCreateOrConnectWithoutUserInput } from "../inputs/MantraCreateOrConnectWithoutUserInput";
import { MantraCreateWithoutUserInput } from "../inputs/MantraCreateWithoutUserInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class MantraCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [MantraCreateWithoutUserInput], { nullable: true })
  create?: MantraCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: MantraCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => MantraCreateManyUserInputEnvelope, { nullable: true })
  createMany?: MantraCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  connect?: MantraWhereUniqueInput[] | undefined;
}
