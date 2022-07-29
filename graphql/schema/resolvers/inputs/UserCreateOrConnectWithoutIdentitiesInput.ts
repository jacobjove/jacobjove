import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutIdentitiesInput } from "../inputs/UserCreateWithoutIdentitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutIdentitiesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutIdentitiesInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutIdentitiesInput, { nullable: false })
  create!: UserCreateWithoutIdentitiesInput;
}
