import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBookshelvesInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutBookshelvesInput, { nullable: false })
  create!: UserCreateWithoutBookshelvesInput;
}
