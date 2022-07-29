import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingScalarWhereInput } from "../inputs/ShelvingScalarWhereInput";
import { ShelvingUpdateManyMutationInput } from "../inputs/ShelvingUpdateManyMutationInput";

@TypeGraphQL.InputType("ShelvingUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field(() => ShelvingScalarWhereInput, { nullable: false })
  where!: ShelvingScalarWhereInput;

  @TypeGraphQL.Field(() => ShelvingUpdateManyMutationInput, { nullable: false })
  data!: ShelvingUpdateManyMutationInput;
}
