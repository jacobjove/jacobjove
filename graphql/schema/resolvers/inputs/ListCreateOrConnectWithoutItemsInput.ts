import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateWithoutItemsInput } from "../inputs/ListCreateWithoutItemsInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateOrConnectWithoutItemsInput", {
  isAbstract: true,
})
export class ListCreateOrConnectWithoutItemsInput {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ListCreateWithoutItemsInput, { nullable: false })
  create!: ListCreateWithoutItemsInput;
}
