import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutReadingsInput", { isAbstract: true })
export class BookCreateOrConnectWithoutReadingsInput {
  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(() => BookCreateWithoutReadingsInput, { nullable: false })
  create!: BookCreateWithoutReadingsInput;
}
