import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateOrConnectWithoutAuthorshipsInput } from "../inputs/AuthorCreateOrConnectWithoutAuthorshipsInput";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorCreateNestedOneWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorCreateNestedOneWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => AuthorCreateWithoutAuthorshipsInput, { nullable: true })
  create?: AuthorCreateWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorCreateOrConnectWithoutAuthorshipsInput, { nullable: true })
  connectOrCreate?: AuthorCreateOrConnectWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorWhereUniqueInput, { nullable: true })
  connect?: AuthorWhereUniqueInput | undefined;
}
