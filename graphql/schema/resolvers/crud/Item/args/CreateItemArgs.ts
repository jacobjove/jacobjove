import * as TypeGraphQL from "type-graphql";
import { ItemCreateInput } from "../../../inputs/ItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateItemArgs {
  @TypeGraphQL.Field((_type) => ItemCreateInput, {
    nullable: false,
  })
  data!: ItemCreateInput;
}
