import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutAuthorshipsInput } from "../inputs/BookCreateWithoutAuthorshipsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutAuthorshipsInput", { isAbstract: true })
export class BookCreateOrConnectWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(() => BookCreateWithoutAuthorshipsInput, { nullable: false })
  create!: BookCreateWithoutAuthorshipsInput;
}
