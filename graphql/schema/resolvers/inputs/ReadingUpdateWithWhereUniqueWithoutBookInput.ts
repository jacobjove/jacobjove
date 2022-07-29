import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingUpdateWithoutBookInput } from "../inputs/ReadingUpdateWithoutBookInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class ReadingUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateWithoutBookInput, { nullable: false })
  data!: ReadingUpdateWithoutBookInput;
}
