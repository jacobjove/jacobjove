import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutReadingsInput } from "../inputs/BookCreateOrConnectWithoutReadingsInput";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutReadingsInput", {
  isAbstract: true,
})
export class BookCreateNestedOneWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => BookCreateWithoutReadingsInput, {
    nullable: true,
  })
  create?: BookCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateOrConnectWithoutReadingsInput, {
    nullable: true,
  })
  connectOrCreate?: BookCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookWhereUniqueInput | undefined;
}
