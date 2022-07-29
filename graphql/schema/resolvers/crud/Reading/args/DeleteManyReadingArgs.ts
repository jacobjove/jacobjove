import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingWhereInput, { nullable: true })
  where?: ReadingWhereInput | undefined;
}
