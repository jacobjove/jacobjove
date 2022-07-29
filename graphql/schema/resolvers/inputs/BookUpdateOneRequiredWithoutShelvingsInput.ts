import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutShelvingsInput } from "../inputs/BookCreateOrConnectWithoutShelvingsInput";
import { BookCreateWithoutShelvingsInput } from "../inputs/BookCreateWithoutShelvingsInput";
import { BookUpdateWithoutShelvingsInput } from "../inputs/BookUpdateWithoutShelvingsInput";
import { BookUpsertWithoutShelvingsInput } from "../inputs/BookUpsertWithoutShelvingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookUpdateOneRequiredWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookCreateWithoutShelvingsInput, { nullable: true })
  create?: BookCreateWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutShelvingsInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookUpsertWithoutShelvingsInput, { nullable: true })
  upsert?: BookUpsertWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateWithoutShelvingsInput, { nullable: true })
  update?: BookUpdateWithoutShelvingsInput | undefined;
}
