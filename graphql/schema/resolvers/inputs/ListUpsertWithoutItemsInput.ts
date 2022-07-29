import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateWithoutItemsInput } from "../inputs/ListCreateWithoutItemsInput";
import { ListUpdateWithoutItemsInput } from "../inputs/ListUpdateWithoutItemsInput";

@TypeGraphQL.InputType("ListUpsertWithoutItemsInput", {
  isAbstract: true,
})
export class ListUpsertWithoutItemsInput {
  @TypeGraphQL.Field((_type) => ListUpdateWithoutItemsInput, { nullable: false })
  update!: ListUpdateWithoutItemsInput;

  @TypeGraphQL.Field((_type) => ListCreateWithoutItemsInput, { nullable: false })
  create!: ListCreateWithoutItemsInput;
}
