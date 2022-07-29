import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateOrConnectWithoutShelvingsInput } from "../inputs/BookshelfCreateOrConnectWithoutShelvingsInput";
import { BookshelfCreateWithoutShelvingsInput } from "../inputs/BookshelfCreateWithoutShelvingsInput";
import { BookshelfUpdateWithoutShelvingsInput } from "../inputs/BookshelfUpdateWithoutShelvingsInput";
import { BookshelfUpsertWithoutShelvingsInput } from "../inputs/BookshelfUpsertWithoutShelvingsInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpdateOneRequiredWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookshelfUpdateOneRequiredWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookshelfCreateWithoutShelvingsInput, { nullable: true })
  create?: BookshelfCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookshelfCreateOrConnectWithoutShelvingsInput, { nullable: true })
  connectOrCreate?: BookshelfCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookshelfUpsertWithoutShelvingsInput, { nullable: true })
  upsert?: BookshelfUpsertWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: true })
  connect?: BookshelfWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => BookshelfUpdateWithoutShelvingsInput, { nullable: true })
  update?: BookshelfUpdateWithoutShelvingsInput | undefined;
}
