import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateOrConnectWithoutItemsInput } from "../inputs/ListCreateOrConnectWithoutItemsInput";
import { ListCreateWithoutItemsInput } from "../inputs/ListCreateWithoutItemsInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateNestedOneWithoutItemsInput", {
  isAbstract: true,
})
export class ListCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field((_type) => ListCreateWithoutItemsInput, { nullable: true })
  create?: ListCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field((_type) => ListCreateOrConnectWithoutItemsInput, { nullable: true })
  connectOrCreate?: ListCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, { nullable: true })
  connect?: ListWhereUniqueInput | undefined;
}
