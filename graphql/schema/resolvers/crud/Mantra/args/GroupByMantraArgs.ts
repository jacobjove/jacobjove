import * as TypeGraphQL from "type-graphql";
import { MantraScalarFieldEnum } from "../../../../enums/MantraScalarFieldEnum";
import { MantraOrderByWithAggregationInput } from "../../../inputs/MantraOrderByWithAggregationInput";
import { MantraScalarWhereWithAggregatesInput } from "../../../inputs/MantraScalarWhereWithAggregatesInput";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByMantraArgs {
  @TypeGraphQL.Field((_type) => MantraWhereInput, {
    nullable: true,
  })
  where?: MantraWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MantraOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MantraOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "content" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => MantraScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MantraScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
