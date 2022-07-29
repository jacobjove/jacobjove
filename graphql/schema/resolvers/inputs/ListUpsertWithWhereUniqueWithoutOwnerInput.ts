import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListUpdateWithoutOwnerInput } from "../inputs/ListUpdateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class ListUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ListUpdateWithoutOwnerInput, { nullable: false })
  update!: ListUpdateWithoutOwnerInput;

  @TypeGraphQL.Field((_type) => ListCreateWithoutOwnerInput, { nullable: false })
  create!: ListCreateWithoutOwnerInput;
}
