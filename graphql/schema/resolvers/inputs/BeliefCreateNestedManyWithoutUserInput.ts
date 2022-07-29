import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateManyUserInputEnvelope } from "../inputs/BeliefCreateManyUserInputEnvelope";
import { BeliefCreateOrConnectWithoutUserInput } from "../inputs/BeliefCreateOrConnectWithoutUserInput";
import { BeliefCreateWithoutUserInput } from "../inputs/BeliefCreateWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class BeliefCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [BeliefCreateWithoutUserInput], { nullable: true })
  create?: BeliefCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: BeliefCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => BeliefCreateManyUserInputEnvelope, { nullable: true })
  createMany?: BeliefCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BeliefWhereUniqueInput], { nullable: true })
  connect?: BeliefWhereUniqueInput[] | undefined;
}
