import * as TypeGraphQL from "type-graphql";
import { BeliefUpdateManyMutationInput } from "../../../inputs/BeliefUpdateManyMutationInput";
import { BeliefWhereInput } from "../../../inputs/BeliefWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BeliefUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => BeliefWhereInput, {
    nullable: true,
  })
  where?: BeliefWhereInput | undefined;
}
