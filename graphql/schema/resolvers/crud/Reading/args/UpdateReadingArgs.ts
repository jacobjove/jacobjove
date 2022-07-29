import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingUpdateInput } from "../../../inputs/ReadingUpdateInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReadingArgs {
  @TypeGraphQL.Field(() => ReadingUpdateInput, { nullable: false })
  data!: ReadingUpdateInput;

  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;
}
