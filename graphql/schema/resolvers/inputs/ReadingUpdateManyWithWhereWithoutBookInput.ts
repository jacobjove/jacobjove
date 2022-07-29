import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyMutationInput } from "../inputs/ReadingUpdateManyMutationInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class ReadingUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field(() => ReadingScalarWhereInput, { nullable: false })
  where!: ReadingScalarWhereInput;

  @TypeGraphQL.Field(() => ReadingUpdateManyMutationInput, { nullable: false })
  data!: ReadingUpdateManyMutationInput;
}
