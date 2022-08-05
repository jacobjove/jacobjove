import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListUpdateWithoutOwnerInput } from "../inputs/ListUpdateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpdateWithWhereUniqueWithoutOwnerInput", { isAbstract: true })
export class ListUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field(() => ListUpdateWithoutOwnerInput, { nullable: false })
  data!: ListUpdateWithoutOwnerInput;
}
