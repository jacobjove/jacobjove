import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutReadingsInput } from "../inputs/UserCreateOrConnectWithoutReadingsInput";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReadingsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutReadingsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutReadingsInput, { nullable: true })
  create?: UserCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutReadingsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
