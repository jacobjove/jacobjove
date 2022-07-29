import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutIdentitiesInput } from "../inputs/UserCreateWithoutIdentitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutIdentitiesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutIdentitiesInput, { nullable: false })
  create!: UserCreateWithoutIdentitiesInput;
}
