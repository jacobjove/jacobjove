import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListUpdateWithoutOwnerInput } from "../inputs/ListUpdateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class ListUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field(() => ListUpdateWithoutOwnerInput, { nullable: false })
  update!: ListUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(() => ListCreateWithoutOwnerInput, { nullable: false })
  create!: ListCreateWithoutOwnerInput;
}
