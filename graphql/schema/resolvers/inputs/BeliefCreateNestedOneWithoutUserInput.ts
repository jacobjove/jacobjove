import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateInput } from "../inputs/BeliefCreateInput";
import { BeliefCreateOrConnectWithoutUserInput } from "../inputs/BeliefCreateOrConnectWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefCreateNestedOneWithoutUserInput", {
  isAbstract: true,
})
export class BeliefCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(() => BeliefCreateInput, { nullable: true })
  create?: BeliefCreateInput | undefined;

  @TypeGraphQL.Field(() => BeliefCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: BeliefCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(() => BeliefWhereUniqueInput, { nullable: true })
  connect?: BeliefWhereUniqueInput | undefined;
}
