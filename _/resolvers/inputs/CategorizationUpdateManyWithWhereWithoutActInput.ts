import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationScalarWhereInput } from "../inputs/CategorizationScalarWhereInput";
import { CategorizationUpdateManyMutationInput } from "../inputs/CategorizationUpdateManyMutationInput";

@TypeGraphQL.InputType("CategorizationUpdateManyWithWhereWithoutActInput", { isAbstract: true })
export class CategorizationUpdateManyWithWhereWithoutActInput {
  @TypeGraphQL.Field(() => CategorizationScalarWhereInput, { nullable: false })
  where!: CategorizationScalarWhereInput;

  @TypeGraphQL.Field(() => CategorizationUpdateManyMutationInput, { nullable: false })
  data!: CategorizationUpdateManyMutationInput;
}
