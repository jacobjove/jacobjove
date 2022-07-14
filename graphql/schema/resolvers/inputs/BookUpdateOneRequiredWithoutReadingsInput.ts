import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutReadingsInput } from "../inputs/BookCreateOrConnectWithoutReadingsInput";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookUpdateWithoutReadingsInput } from "../inputs/BookUpdateWithoutReadingsInput";
import { BookUpsertWithoutReadingsInput } from "../inputs/BookUpsertWithoutReadingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutReadingsInput", {
  isAbstract: true,
})
export class BookUpdateOneRequiredWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => BookCreateWithoutReadingsInput, {
    nullable: true,
  })
  create?: BookCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateOrConnectWithoutReadingsInput, {
    nullable: true,
  })
  connectOrCreate?: BookCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpsertWithoutReadingsInput, {
    nullable: true,
  })
  upsert?: BookUpsertWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateWithoutReadingsInput, {
    nullable: true,
  })
  update?: BookUpdateWithoutReadingsInput | undefined;
}
