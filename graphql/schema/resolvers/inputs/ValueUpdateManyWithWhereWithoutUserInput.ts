import * as TypeGraphQL from "type-graphql";
import { ValueScalarWhereInput } from "../inputs/ValueScalarWhereInput";
import { ValueUpdateManyMutationInput } from "../inputs/ValueUpdateManyMutationInput";

@TypeGraphQL.InputType("ValueUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class ValueUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => ValueScalarWhereInput, {
    nullable: false,
  })
  where!: ValueScalarWhereInput;

  @TypeGraphQL.Field((_type) => ValueUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ValueUpdateManyMutationInput;
}
