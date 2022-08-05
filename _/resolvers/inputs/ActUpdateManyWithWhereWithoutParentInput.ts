import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActScalarWhereInput } from "../inputs/ActScalarWhereInput";
import { ActUpdateManyMutationInput } from "../inputs/ActUpdateManyMutationInput";

@TypeGraphQL.InputType("ActUpdateManyWithWhereWithoutParentInput", { isAbstract: true })
export class ActUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field(() => ActScalarWhereInput, { nullable: false })
  where!: ActScalarWhereInput;

  @TypeGraphQL.Field(() => ActUpdateManyMutationInput, { nullable: false })
  data!: ActUpdateManyMutationInput;
}
