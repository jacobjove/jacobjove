import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateOrConnectWithoutShelvingsInput } from "../inputs/BookshelfCreateOrConnectWithoutShelvingsInput";
import { BookshelfCreateWithoutShelvingsInput } from "../inputs/BookshelfCreateWithoutShelvingsInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfCreateNestedOneWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookshelfCreateNestedOneWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookshelfCreateWithoutShelvingsInput, { nullable: true })
  create?: BookshelfCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookshelfCreateOrConnectWithoutShelvingsInput, { nullable: true })
  connectOrCreate?: BookshelfCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: true })
  connect?: BookshelfWhereUniqueInput | undefined;
}
