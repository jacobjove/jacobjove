import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateManyMutationInput } from "../../../inputs/ActUpdateManyMutationInput";
import { ActWhereInput } from "../../../inputs/ActWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActArgs {
  @TypeGraphQL.Field(() => ActUpdateManyMutationInput, { nullable: false })
  data!: ActUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ActWhereInput, { nullable: true })
  where?: ActWhereInput | undefined;
}
