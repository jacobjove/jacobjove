import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutShelvingsInput } from "../inputs/BookCreateOrConnectWithoutShelvingsInput";
import { BookCreateWithoutShelvingsInput } from "../inputs/BookCreateWithoutShelvingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookCreateNestedOneWithoutShelvingsInput {
  @TypeGraphQL.Field((_type) => BookCreateWithoutShelvingsInput, {
    nullable: true,
  })
  create?: BookCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateOrConnectWithoutShelvingsInput, {
    nullable: true,
  })
  connectOrCreate?: BookCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookWhereUniqueInput | undefined;
}
