import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutAuthorshipsInput } from "../inputs/BookCreateOrConnectWithoutAuthorshipsInput";
import { BookCreateWithoutAuthorshipsInput } from "../inputs/BookCreateWithoutAuthorshipsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class BookCreateNestedOneWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => BookCreateWithoutAuthorshipsInput, { nullable: true })
  create?: BookCreateWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateOrConnectWithoutAuthorshipsInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;
}
