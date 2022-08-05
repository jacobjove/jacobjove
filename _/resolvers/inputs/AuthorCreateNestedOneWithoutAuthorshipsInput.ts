import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateOrConnectWithoutAuthorshipsInput } from "../inputs/AuthorCreateOrConnectWithoutAuthorshipsInput";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorCreateNestedOneWithoutAuthorshipsInput", { isAbstract: true })
export class AuthorCreateNestedOneWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => AuthorCreateWithoutAuthorshipsInput, { nullable: true })
  create?: AuthorCreateWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => AuthorCreateOrConnectWithoutAuthorshipsInput, { nullable: true })
  connectOrCreate?: AuthorCreateOrConnectWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  connect?: AuthorWhereUniqueInput | undefined;
}
