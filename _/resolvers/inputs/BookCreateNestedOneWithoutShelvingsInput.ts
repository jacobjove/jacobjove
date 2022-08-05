import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutShelvingsInput } from "../inputs/BookCreateOrConnectWithoutShelvingsInput";
import { BookCreateWithoutShelvingsInput } from "../inputs/BookCreateWithoutShelvingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutShelvingsInput", { isAbstract: true })
export class BookCreateNestedOneWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookCreateWithoutShelvingsInput, { nullable: true })
  create?: BookCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutShelvingsInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;
}
