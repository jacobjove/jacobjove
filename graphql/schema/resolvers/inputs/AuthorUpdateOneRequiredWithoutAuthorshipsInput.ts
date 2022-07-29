import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateOrConnectWithoutAuthorshipsInput } from "../inputs/AuthorCreateOrConnectWithoutAuthorshipsInput";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorUpdateWithoutAuthorshipsInput } from "../inputs/AuthorUpdateWithoutAuthorshipsInput";
import { AuthorUpsertWithoutAuthorshipsInput } from "../inputs/AuthorUpsertWithoutAuthorshipsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorUpdateOneRequiredWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorUpdateOneRequiredWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => AuthorCreateWithoutAuthorshipsInput, { nullable: true })
  create?: AuthorCreateWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => AuthorCreateOrConnectWithoutAuthorshipsInput, { nullable: true })
  connectOrCreate?: AuthorCreateOrConnectWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => AuthorUpsertWithoutAuthorshipsInput, { nullable: true })
  upsert?: AuthorUpsertWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  connect?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => AuthorUpdateWithoutAuthorshipsInput, { nullable: true })
  update?: AuthorUpdateWithoutAuthorshipsInput | undefined;
}
