import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReadingsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutReadingsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReadingsInput;
}
