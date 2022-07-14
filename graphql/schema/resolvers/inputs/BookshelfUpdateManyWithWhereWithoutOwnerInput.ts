import * as TypeGraphQL from "type-graphql";
import { BookshelfScalarWhereInput } from "../inputs/BookshelfScalarWhereInput";
import { BookshelfUpdateManyMutationInput } from "../inputs/BookshelfUpdateManyMutationInput";

@TypeGraphQL.InputType("BookshelfUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => BookshelfScalarWhereInput, {
    nullable: false,
  })
  where!: BookshelfScalarWhereInput;

  @TypeGraphQL.Field((_type) => BookshelfUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BookshelfUpdateManyMutationInput;
}
