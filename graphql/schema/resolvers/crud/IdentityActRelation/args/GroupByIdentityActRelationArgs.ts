import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationScalarFieldEnum } from "../../../../enums/IdentityActRelationScalarFieldEnum";
import { IdentityActRelationOrderByWithAggregationInput } from "../../../inputs/IdentityActRelationOrderByWithAggregationInput";
import { IdentityActRelationScalarWhereWithAggregatesInput } from "../../../inputs/IdentityActRelationScalarWhereWithAggregatesInput";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, {
    nullable: true,
  })
  where?: IdentityActRelationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: IdentityActRelationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "identityId" | "actionId" | "archivedAt">;

  @TypeGraphQL.Field((_type) => IdentityActRelationScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: IdentityActRelationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
