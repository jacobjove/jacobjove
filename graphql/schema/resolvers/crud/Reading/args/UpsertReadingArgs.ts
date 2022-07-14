import * as TypeGraphQL from "type-graphql";
import { ReadingCreateInput } from "../../../inputs/ReadingCreateInput";
import { ReadingUpdateInput } from "../../../inputs/ReadingUpdateInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: false,
  })
  where!: ReadingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ReadingCreateInput, {
    nullable: false,
  })
  create!: ReadingCreateInput;

  @TypeGraphQL.Field((_type) => ReadingUpdateInput, {
    nullable: false,
  })
  update!: ReadingUpdateInput;
}
