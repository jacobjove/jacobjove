import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutAuthorshipsInput } from "../inputs/BookCreateWithoutAuthorshipsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class BookCreateOrConnectWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: false,
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookCreateWithoutAuthorshipsInput, {
    nullable: false,
  })
  create!: BookCreateWithoutAuthorshipsInput;
}
