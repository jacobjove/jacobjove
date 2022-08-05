import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutShelvingsInput } from "../inputs/BookCreateWithoutShelvingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutShelvingsInput", { isAbstract: true })
export class BookCreateOrConnectWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(() => BookCreateWithoutShelvingsInput, { nullable: false })
  create!: BookCreateWithoutShelvingsInput;
}
