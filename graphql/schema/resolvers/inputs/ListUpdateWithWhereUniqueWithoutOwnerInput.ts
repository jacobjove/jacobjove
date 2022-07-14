import * as TypeGraphQL from "type-graphql";
import { ListUpdateWithoutOwnerInput } from "../inputs/ListUpdateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class ListUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => ListWhereUniqueInput, {
    nullable: false,
  })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ListUpdateWithoutOwnerInput, {
    nullable: false,
  })
  data!: ListUpdateWithoutOwnerInput;
}
