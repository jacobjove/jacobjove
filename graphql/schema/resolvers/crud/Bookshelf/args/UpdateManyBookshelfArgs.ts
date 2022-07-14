import * as TypeGraphQL from "type-graphql";
import { BookshelfUpdateManyMutationInput } from "../../../inputs/BookshelfUpdateManyMutationInput";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BookshelfUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => BookshelfWhereInput, {
    nullable: true,
  })
  where?: BookshelfWhereInput | undefined;
}
