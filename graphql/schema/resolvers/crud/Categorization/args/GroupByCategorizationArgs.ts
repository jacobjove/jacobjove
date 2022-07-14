import * as TypeGraphQL from "type-graphql";
import { CategorizationScalarFieldEnum } from "../../../../enums/CategorizationScalarFieldEnum";
import { CategorizationOrderByWithAggregationInput } from "../../../inputs/CategorizationOrderByWithAggregationInput";
import { CategorizationScalarWhereWithAggregatesInput } from "../../../inputs/CategorizationScalarWhereWithAggregatesInput";
import { CategorizationWhereInput } from "../../../inputs/CategorizationWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereInput, {
    nullable: true,
  })
  where?: CategorizationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: CategorizationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "categoryId" | "actId" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => CategorizationScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: CategorizationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
