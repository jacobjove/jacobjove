import * as TypeGraphQL from "type-graphql";
import { IdentityScalarFieldEnum } from "../../../../enums/IdentityScalarFieldEnum";
import { IdentityOrderByWithAggregationInput } from "../../../inputs/IdentityOrderByWithAggregationInput";
import { IdentityScalarWhereWithAggregatesInput } from "../../../inputs/IdentityScalarWhereWithAggregatesInput";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityWhereInput, {
    nullable: true,
  })
  where?: IdentityWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [IdentityOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: IdentityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "slug" | "description">;

  @TypeGraphQL.Field((_type) => IdentityScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: IdentityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
