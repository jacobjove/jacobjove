import * as TypeGraphQL from "type-graphql";
import { ShelvingScalarWhereInput } from "../inputs/ShelvingScalarWhereInput";
import { ShelvingUpdateManyMutationInput } from "../inputs/ShelvingUpdateManyMutationInput";

@TypeGraphQL.InputType("ShelvingUpdateManyWithWhereWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingUpdateManyWithWhereWithoutShelfInput {
  @TypeGraphQL.Field((_type) => ShelvingScalarWhereInput, {
    nullable: false,
  })
  where!: ShelvingScalarWhereInput;

  @TypeGraphQL.Field((_type) => ShelvingUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ShelvingUpdateManyMutationInput;
}
