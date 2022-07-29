import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyMutationInput } from "../inputs/ReadingUpdateManyMutationInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class ReadingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => ReadingScalarWhereInput, { nullable: false })
  where!: ReadingScalarWhereInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateManyMutationInput, { nullable: false })
  data!: ReadingUpdateManyMutationInput;
}
