import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutReadingsInput } from "../inputs/BookCreateOrConnectWithoutReadingsInput";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookUpdateWithoutReadingsInput } from "../inputs/BookUpdateWithoutReadingsInput";
import { BookUpsertWithoutReadingsInput } from "../inputs/BookUpsertWithoutReadingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutReadingsInput", {
  isAbstract: true,
})
export class BookUpdateOneRequiredWithoutReadingsInput {
  @TypeGraphQL.Field(() => BookCreateWithoutReadingsInput, { nullable: true })
  create?: BookCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutReadingsInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookUpsertWithoutReadingsInput, { nullable: true })
  upsert?: BookUpsertWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateWithoutReadingsInput, { nullable: true })
  update?: BookUpdateWithoutReadingsInput | undefined;
}
