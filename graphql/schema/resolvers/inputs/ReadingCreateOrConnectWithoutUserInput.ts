import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutUserInput } from "../inputs/ReadingCreateWithoutUserInput";
import { ReadingWhereUniqueInput } from "../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.InputType("ReadingCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class ReadingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field(() => ReadingCreateWithoutUserInput, { nullable: false })
  create!: ReadingCreateWithoutUserInput;
}
