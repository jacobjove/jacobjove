import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemWhereUniqueInput } from "../../../inputs/ItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueItemArgs {
  @TypeGraphQL.Field((_type) => ItemWhereUniqueInput, { nullable: false })
  where!: ItemWhereUniqueInput;
}
