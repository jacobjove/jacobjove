import * as TypeGraphQL from "type-graphql";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class ReadingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: false,
  })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ReadingCreateWithoutUserInput;
}
