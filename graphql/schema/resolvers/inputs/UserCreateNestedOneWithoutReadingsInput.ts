import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutReadingsInput } from "../inputs/UserCreateOrConnectWithoutReadingsInput";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReadingsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutReadingsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutReadingsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
