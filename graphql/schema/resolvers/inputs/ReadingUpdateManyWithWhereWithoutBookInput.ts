import * as TypeGraphQL from "type-graphql";
import { ReadingScalarWhereInput } from "../inputs/ReadingScalarWhereInput";
import { ReadingUpdateManyMutationInput } from "../inputs/ReadingUpdateManyMutationInput";

@TypeGraphQL.InputType("ReadingUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class ReadingUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field((_type) => ReadingScalarWhereInput, {
    nullable: false,
  })
  where!: ReadingScalarWhereInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ReadingUpdateManyMutationInput;
}
