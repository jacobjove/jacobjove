import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyUserInputEnvelope } from "../inputs/ValueCreateManyUserInputEnvelope";
import { ValueCreateOrConnectWithoutUserInput } from "../inputs/ValueCreateOrConnectWithoutUserInput";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class ValueCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ValueCreateWithoutUserInput], { nullable: true })
  create?: ValueCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ValueCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ValueCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ValueCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereUniqueInput], { nullable: true })
  connect?: ValueWhereUniqueInput[] | undefined;
}
