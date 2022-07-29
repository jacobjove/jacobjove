import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReadingsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutReadingsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutReadingsInput, { nullable: false })
  create!: UserCreateWithoutReadingsInput;
}
