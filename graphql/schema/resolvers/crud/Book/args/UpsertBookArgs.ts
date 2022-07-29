import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateInput } from "../../../inputs/BookCreateInput";
import { BookUpdateInput } from "../../../inputs/BookUpdateInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookArgs {
  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(() => BookCreateInput, { nullable: false })
  create!: BookCreateInput;

  @TypeGraphQL.Field(() => BookUpdateInput, { nullable: false })
  update!: BookUpdateInput;
}
