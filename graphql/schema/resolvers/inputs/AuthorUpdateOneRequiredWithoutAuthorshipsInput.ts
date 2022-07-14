import * as TypeGraphQL from "type-graphql";
import { AuthorCreateOrConnectWithoutAuthorshipsInput } from "../inputs/AuthorCreateOrConnectWithoutAuthorshipsInput";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorUpdateWithoutAuthorshipsInput } from "../inputs/AuthorUpdateWithoutAuthorshipsInput";
import { AuthorUpsertWithoutAuthorshipsInput } from "../inputs/AuthorUpsertWithoutAuthorshipsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorUpdateOneRequiredWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorUpdateOneRequiredWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => AuthorCreateWithoutAuthorshipsInput, {
    nullable: true,
  })
  create?: AuthorCreateWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorCreateOrConnectWithoutAuthorshipsInput, {
    nullable: true,
  })
  connectOrCreate?: AuthorCreateOrConnectWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorUpsertWithoutAuthorshipsInput, {
    nullable: true,
  })
  upsert?: AuthorUpsertWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorWhereUniqueInput, {
    nullable: true,
  })
  connect?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorUpdateWithoutAuthorshipsInput, {
    nullable: true,
  })
  update?: AuthorUpdateWithoutAuthorshipsInput | undefined;
}
