import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionUpdateManyMutationInput } from "../../../inputs/ActionUpdateManyMutationInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActionArgs {
  @TypeGraphQL.Field(() => ActionUpdateManyMutationInput, { nullable: false })
  data!: ActionUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  where?: ActionWhereInput | undefined;
}
