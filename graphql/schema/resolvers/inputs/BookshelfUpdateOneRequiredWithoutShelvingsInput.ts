import * as TypeGraphQL from "type-graphql";
import { BookshelfCreateOrConnectWithoutShelvingsInput } from "../inputs/BookshelfCreateOrConnectWithoutShelvingsInput";
import { BookshelfCreateWithoutShelvingsInput } from "../inputs/BookshelfCreateWithoutShelvingsInput";
import { BookshelfUpdateWithoutShelvingsInput } from "../inputs/BookshelfUpdateWithoutShelvingsInput";
import { BookshelfUpsertWithoutShelvingsInput } from "../inputs/BookshelfUpsertWithoutShelvingsInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpdateOneRequiredWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookshelfUpdateOneRequiredWithoutShelvingsInput {
  @TypeGraphQL.Field((_type) => BookshelfCreateWithoutShelvingsInput, {
    nullable: true,
  })
  create?: BookshelfCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfCreateOrConnectWithoutShelvingsInput, {
    nullable: true,
  })
  connectOrCreate?: BookshelfCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfUpsertWithoutShelvingsInput, {
    nullable: true,
  })
  upsert?: BookshelfUpsertWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookshelfWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfUpdateWithoutShelvingsInput, {
    nullable: true,
  })
  update?: BookshelfUpdateWithoutShelvingsInput | undefined;
}
