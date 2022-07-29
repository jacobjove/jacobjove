import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateInput } from "../../../inputs/BookUpdateInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookArgs {
  @TypeGraphQL.Field(() => BookUpdateInput, { nullable: false })
  data!: BookUpdateInput;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}
