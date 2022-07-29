import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutAuthorshipsInput } from "../inputs/BookCreateOrConnectWithoutAuthorshipsInput";
import { BookCreateWithoutAuthorshipsInput } from "../inputs/BookCreateWithoutAuthorshipsInput";
import { BookUpdateWithoutAuthorshipsInput } from "../inputs/BookUpdateWithoutAuthorshipsInput";
import { BookUpsertWithoutAuthorshipsInput } from "../inputs/BookUpsertWithoutAuthorshipsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class BookUpdateOneRequiredWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => BookCreateWithoutAuthorshipsInput, { nullable: true })
  create?: BookCreateWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutAuthorshipsInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => BookUpsertWithoutAuthorshipsInput, { nullable: true })
  upsert?: BookUpsertWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateWithoutAuthorshipsInput, { nullable: true })
  update?: BookUpdateWithoutAuthorshipsInput | undefined;
}
