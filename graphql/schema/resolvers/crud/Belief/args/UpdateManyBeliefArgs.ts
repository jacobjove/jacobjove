import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefUpdateManyMutationInput } from "../../../inputs/BeliefUpdateManyMutationInput";
import { BeliefWhereInput } from "../../../inputs/BeliefWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBeliefArgs {
  @TypeGraphQL.Field(() => BeliefUpdateManyMutationInput, { nullable: false })
  data!: BeliefUpdateManyMutationInput;

  @TypeGraphQL.Field(() => BeliefWhereInput, { nullable: true })
  where?: BeliefWhereInput | undefined;
}
