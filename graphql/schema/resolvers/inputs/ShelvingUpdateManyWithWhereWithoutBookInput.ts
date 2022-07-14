import * as TypeGraphQL from "type-graphql";
import { ShelvingScalarWhereInput } from "../inputs/ShelvingScalarWhereInput";
import { ShelvingUpdateManyMutationInput } from "../inputs/ShelvingUpdateManyMutationInput";

@TypeGraphQL.InputType("ShelvingUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field((_type) => ShelvingScalarWhereInput, {
    nullable: false,
  })
  where!: ShelvingScalarWhereInput;

  @TypeGraphQL.Field((_type) => ShelvingUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ShelvingUpdateManyMutationInput;
}
