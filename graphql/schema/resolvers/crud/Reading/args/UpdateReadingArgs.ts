import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingUpdateInput } from "../../../inputs/ReadingUpdateInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingUpdateInput, { nullable: false })
  data!: ReadingUpdateInput;

  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;
}
