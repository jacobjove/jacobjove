import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfScalarWhereInput } from "../inputs/BookshelfScalarWhereInput";
import { BookshelfUpdateManyMutationInput } from "../inputs/BookshelfUpdateManyMutationInput";

@TypeGraphQL.InputType("BookshelfUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(() => BookshelfScalarWhereInput, { nullable: false })
  where!: BookshelfScalarWhereInput;

  @TypeGraphQL.Field(() => BookshelfUpdateManyMutationInput, { nullable: false })
  data!: BookshelfUpdateManyMutationInput;
}
