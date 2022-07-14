import * as TypeGraphQL from "type-graphql";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";
import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByUserArgs {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "name" | "email" | "emailVerified" | "image" | "isAdmin" | "settings" | "lastLogin"
  >;

  @TypeGraphQL.Field((_type) => UserScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
