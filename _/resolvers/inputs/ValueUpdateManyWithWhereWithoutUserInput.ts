import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueScalarWhereInput } from "../inputs/ValueScalarWhereInput";
import { ValueUpdateManyMutationInput } from "../inputs/ValueUpdateManyMutationInput";

@TypeGraphQL.InputType("ValueUpdateManyWithWhereWithoutUserInput", { isAbstract: true })
export class ValueUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(() => ValueScalarWhereInput, { nullable: false })
  where!: ValueScalarWhereInput;

  @TypeGraphQL.Field(() => ValueUpdateManyMutationInput, { nullable: false })
  data!: ValueUpdateManyMutationInput;
}
