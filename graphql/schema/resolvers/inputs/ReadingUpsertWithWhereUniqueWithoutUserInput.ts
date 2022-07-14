import * as TypeGraphQL from "type-graphql";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingUpdateWithoutUserInput } from "../inputs/ReadingUpdateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class ReadingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: false,
  })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ReadingUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ReadingCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ReadingCreateWithoutUserInput;
}
