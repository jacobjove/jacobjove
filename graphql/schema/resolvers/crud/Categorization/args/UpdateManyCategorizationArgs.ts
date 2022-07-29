import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateManyMutationInput } from "../../../inputs/CategorizationUpdateManyMutationInput";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategorizationArgs {
  @TypeGraphQL.Field(() => CategorizationUpdateManyMutationInput, { nullable: false })
  data!: CategorizationUpdateManyMutationInput;

  @TypeGraphQL.Field(() => CategorizationWhereInput, { nullable: true })
  where?: CategorizationWhereInput | undefined;
}
