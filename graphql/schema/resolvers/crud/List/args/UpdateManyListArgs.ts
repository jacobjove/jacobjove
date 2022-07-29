import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListUpdateManyMutationInput } from "../../../inputs/ListUpdateManyMutationInput";
import { ListWhereInput } from "../../../inputs/ListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyListArgs {
  @TypeGraphQL.Field(() => ListUpdateManyMutationInput, { nullable: false })
  data!: ListUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ListWhereInput, { nullable: true })
  where?: ListWhereInput | undefined;
}
