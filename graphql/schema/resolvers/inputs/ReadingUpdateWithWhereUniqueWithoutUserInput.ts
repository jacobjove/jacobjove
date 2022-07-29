import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingUpdateWithoutUserInput } from "../inputs/ReadingUpdateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ReadingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field(() => ReadingUpdateWithoutUserInput, { nullable: false })
  data!: ReadingUpdateWithoutUserInput;
}
