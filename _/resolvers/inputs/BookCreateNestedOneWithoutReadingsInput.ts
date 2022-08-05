import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutReadingsInput } from "../inputs/BookCreateOrConnectWithoutReadingsInput";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutReadingsInput", { isAbstract: true })
export class BookCreateNestedOneWithoutReadingsInput {
  @TypeGraphQL.Field(() => BookCreateWithoutReadingsInput, { nullable: true })
  create?: BookCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutReadingsInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;
}
