import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateOrConnectWithoutItemsInput } from "../inputs/ListCreateOrConnectWithoutItemsInput";
import { ListCreateWithoutItemsInput } from "../inputs/ListCreateWithoutItemsInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateNestedOneWithoutItemsInput", {
  isAbstract: true,
})
export class ListCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field(() => ListCreateWithoutItemsInput, { nullable: true })
  create?: ListCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(() => ListCreateOrConnectWithoutItemsInput, { nullable: true })
  connectOrCreate?: ListCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: true })
  connect?: ListWhereUniqueInput | undefined;
}
