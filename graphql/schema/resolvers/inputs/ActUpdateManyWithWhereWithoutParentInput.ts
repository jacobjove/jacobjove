import * as TypeGraphQL from "type-graphql";
import { ActScalarWhereInput } from "../inputs/ActScalarWhereInput";
import { ActUpdateManyMutationInput } from "../inputs/ActUpdateManyMutationInput";

@TypeGraphQL.InputType("ActUpdateManyWithWhereWithoutParentInput", {
  isAbstract: true,
})
export class ActUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field((_type) => ActScalarWhereInput, {
    nullable: false,
  })
  where!: ActScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActUpdateManyMutationInput;
}
