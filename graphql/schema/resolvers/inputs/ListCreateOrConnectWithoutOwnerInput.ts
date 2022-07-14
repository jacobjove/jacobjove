import * as TypeGraphQL from "type-graphql";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateOrConnectWithoutOwnerInput", {
  isAbstract: true,
})
export class ListCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, {
    nullable: false,
  })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ListCreateWithoutOwnerInput, {
    nullable: false,
  })
  create!: ListCreateWithoutOwnerInput;
}
