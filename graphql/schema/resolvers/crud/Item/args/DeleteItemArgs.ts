import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteItemArgs {
  @TypeGraphQL.Field(() => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;
}
