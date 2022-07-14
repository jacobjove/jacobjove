import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutShelvingsInput } from "../inputs/BookCreateOrConnectWithoutShelvingsInput";
import { BookCreateWithoutShelvingsInput } from "../inputs/BookCreateWithoutShelvingsInput";
import { BookUpdateWithoutShelvingsInput } from "../inputs/BookUpdateWithoutShelvingsInput";
import { BookUpsertWithoutShelvingsInput } from "../inputs/BookUpsertWithoutShelvingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookUpdateOneRequiredWithoutShelvingsInput {
  @TypeGraphQL.Field((_type) => BookCreateWithoutShelvingsInput, {
    nullable: true,
  })
  create?: BookCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateOrConnectWithoutShelvingsInput, {
    nullable: true,
  })
  connectOrCreate?: BookCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpsertWithoutShelvingsInput, {
    nullable: true,
  })
  upsert?: BookUpsertWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateWithoutShelvingsInput, {
    nullable: true,
  })
  update?: BookUpdateWithoutShelvingsInput | undefined;
}
