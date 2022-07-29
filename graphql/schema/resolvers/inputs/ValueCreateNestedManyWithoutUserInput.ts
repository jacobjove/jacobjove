import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyUserInputEnvelope } from "../inputs/ValueCreateManyUserInputEnvelope";
import { ValueCreateOrConnectWithoutUserInput } from "../inputs/ValueCreateOrConnectWithoutUserInput";
import { ValueCreateWithoutUserInput } from "../inputs/ValueCreateWithoutUserInput";
import { ValueWhereUniqueInput } from "../inputs/ValueWhereUniqueInput";

@TypeGraphQL.InputType("ValueCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class ValueCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [ValueCreateWithoutUserInput], { nullable: true })
  create?: ValueCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: ValueCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => ValueCreateManyUserInputEnvelope, { nullable: true })
  createMany?: ValueCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ValueWhereUniqueInput], { nullable: true })
  connect?: ValueWhereUniqueInput[] | undefined;
}
