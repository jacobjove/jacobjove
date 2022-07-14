import * as TypeGraphQL from "type-graphql";
import { BeliefCreateManyUserInputEnvelope } from "../inputs/BeliefCreateManyUserInputEnvelope";
import { BeliefCreateOrConnectWithoutUserInput } from "../inputs/BeliefCreateOrConnectWithoutUserInput";
import { BeliefCreateWithoutUserInput } from "../inputs/BeliefCreateWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class BeliefCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [BeliefCreateWithoutUserInput], {
    nullable: true,
  })
  create?: BeliefCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: BeliefCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => BeliefCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BeliefCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [BeliefWhereUniqueInput], {
    nullable: true,
  })
  connect?: BeliefWhereUniqueInput[] | undefined;
}
