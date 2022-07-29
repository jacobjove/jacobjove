import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraUpdateManyMutationInput } from "../../../inputs/MantraUpdateManyMutationInput";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMantraArgs {
  @TypeGraphQL.Field(() => MantraUpdateManyMutationInput, { nullable: false })
  data!: MantraUpdateManyMutationInput;

  @TypeGraphQL.Field(() => MantraWhereInput, { nullable: true })
  where?: MantraWhereInput | undefined;
}
