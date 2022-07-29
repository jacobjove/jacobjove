import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateInput } from "../../../inputs/ReadingCreateInput";
import { ReadingUpdateInput } from "../../../inputs/ReadingUpdateInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReadingArgs {
  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: false })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field(() => ReadingCreateInput, { nullable: false })
  create!: ReadingCreateInput;

  @TypeGraphQL.Field(() => ReadingUpdateInput, { nullable: false })
  update!: ReadingUpdateInput;
}
