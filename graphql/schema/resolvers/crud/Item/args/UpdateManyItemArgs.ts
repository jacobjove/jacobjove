import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemUpdateManyMutationInput } from "../../../inputs/ItemUpdateManyMutationInput";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemArgs {
  @TypeGraphQL.Field(() => ItemUpdateManyMutationInput, { nullable: false })
  data!: ItemUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ItemWhereInput, { nullable: true })
  where?: ItemWhereInput | undefined;
}
