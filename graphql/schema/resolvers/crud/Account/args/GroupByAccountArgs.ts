import * as TypeGraphQL from "type-graphql";
import { AccountScalarFieldEnum } from "../../../../enums/AccountScalarFieldEnum";
import { AccountOrderByWithAggregationInput } from "../../../inputs/AccountOrderByWithAggregationInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereInput, {
    nullable: true,
  })
  where?: AccountWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AccountOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: AccountOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AccountScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "userId"
    | "provider"
    | "remoteId"
    | "scopes"
    | "accessToken"
    | "refreshToken"
    | "accessTokenExpiry"
    | "syncToken"
    | "createdAt"
  >;

  @TypeGraphQL.Field((_type) => AccountScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: AccountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
