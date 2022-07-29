import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateInput } from "../../../inputs/BookUpdateInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookArgs {
  @TypeGraphQL.Field((_type) => BookUpdateInput, { nullable: false })
  data!: BookUpdateInput;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}
