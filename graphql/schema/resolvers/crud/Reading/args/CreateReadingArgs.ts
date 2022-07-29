import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateInput } from "../../../inputs/ReadingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingCreateInput, { nullable: false })
  data!: ReadingCreateInput;
}
