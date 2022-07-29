import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";
import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyUserArgs {
  @TypeGraphQL.Field((_type) => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [UserScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        "id" | "name" | "email" | "emailVerified" | "image" | "isAdmin" | "settings" | "lastLogin"
      >
    | undefined;
}
