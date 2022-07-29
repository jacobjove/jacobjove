import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationScalarWhereInput } from "../inputs/CategorizationScalarWhereInput";
import { CategorizationUpdateManyMutationInput } from "../inputs/CategorizationUpdateManyMutationInput";

@TypeGraphQL.InputType("CategorizationUpdateManyWithWhereWithoutActInput", {
  isAbstract: true,
})
export class CategorizationUpdateManyWithWhereWithoutActInput {
  @TypeGraphQL.Field((_type) => CategorizationScalarWhereInput, { nullable: false })
  where!: CategorizationScalarWhereInput;

  @TypeGraphQL.Field((_type) => CategorizationUpdateManyMutationInput, { nullable: false })
  data!: CategorizationUpdateManyMutationInput;
}
