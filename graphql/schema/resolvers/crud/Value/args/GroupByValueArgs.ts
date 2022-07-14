import * as TypeGraphQL from "type-graphql";
import { ValueScalarFieldEnum } from "../../../../enums/ValueScalarFieldEnum";
import { ValueOrderByWithAggregationInput } from "../../../inputs/ValueOrderByWithAggregationInput";
import { ValueScalarWhereWithAggregatesInput } from "../../../inputs/ValueScalarWhereWithAggregatesInput";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByValueArgs {
  @TypeGraphQL.Field((_type) => ValueWhereInput, {
    nullable: true,
  })
  where?: ValueWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ValueOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ValueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => ValueScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ValueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
