import * as TypeGraphQL from "type-graphql";
import { ShelvingScalarFieldEnum } from "../../../../enums/ShelvingScalarFieldEnum";
import { ShelvingOrderByWithAggregationInput } from "../../../inputs/ShelvingOrderByWithAggregationInput";
import { ShelvingScalarWhereWithAggregatesInput } from "../../../inputs/ShelvingScalarWhereWithAggregatesInput";
import { ShelvingWhereInput } from "../../../inputs/ShelvingWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingWhereInput, {
    nullable: true,
  })
  where?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ShelvingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "bookId"
    | "shelfId"
    | "position"
    | "rationale"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => ShelvingScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ShelvingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
