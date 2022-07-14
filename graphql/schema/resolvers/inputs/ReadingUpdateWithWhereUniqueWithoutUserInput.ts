import * as TypeGraphQL from "type-graphql";
import { ReadingUpdateWithoutUserInput } from "../inputs/ReadingUpdateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ReadingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: false,
  })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ReadingUpdateWithoutUserInput;
}
