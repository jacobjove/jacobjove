import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookArgs {
  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}
