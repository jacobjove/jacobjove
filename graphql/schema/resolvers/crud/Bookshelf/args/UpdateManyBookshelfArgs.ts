import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfUpdateManyMutationInput } from "../../../inputs/BookshelfUpdateManyMutationInput";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfUpdateManyMutationInput, { nullable: false })
  data!: BookshelfUpdateManyMutationInput;

  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  where?: BookshelfWhereInput | undefined;
}
