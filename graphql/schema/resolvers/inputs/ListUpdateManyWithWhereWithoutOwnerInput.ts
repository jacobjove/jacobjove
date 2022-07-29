import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListScalarWhereInput } from "../inputs/ListScalarWhereInput";
import { ListUpdateManyMutationInput } from "../inputs/ListUpdateManyMutationInput";

@TypeGraphQL.InputType("ListUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true,
})
export class ListUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => ListScalarWhereInput, { nullable: false })
  where!: ListScalarWhereInput;

  @TypeGraphQL.Field((_type) => ListUpdateManyMutationInput, { nullable: false })
  data!: ListUpdateManyMutationInput;
}
