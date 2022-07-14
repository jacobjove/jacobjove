import * as TypeGraphQL from "type-graphql";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: false,
  })
  where!: ReadingWhereUniqueInput;
}
