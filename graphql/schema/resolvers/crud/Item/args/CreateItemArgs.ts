import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateInput } from "../../../inputs/ItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateItemArgs {
  @TypeGraphQL.Field(() => ItemCreateInput, { nullable: false })
  data!: ItemCreateInput;
}
