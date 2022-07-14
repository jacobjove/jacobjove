import * as TypeGraphQL from "type-graphql";
import { ReadingScalarFieldEnum } from "../../../../enums/ReadingScalarFieldEnum";
import { ReadingOrderByWithAggregationInput } from "../../../inputs/ReadingOrderByWithAggregationInput";
import { ReadingScalarWhereWithAggregatesInput } from "../../../inputs/ReadingScalarWhereWithAggregatesInput";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingWhereInput, {
    nullable: true,
  })
  where?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ReadingOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ReadingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "userId"
    | "bookId"
    | "dateStarted"
    | "dateFinished"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => ReadingScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ReadingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
