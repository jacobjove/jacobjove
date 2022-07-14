import * as TypeGraphQL from "type-graphql";
import { ReadingScalarFieldEnum } from "../../../../enums/ReadingScalarFieldEnum";
import { ReadingOrderByWithRelationInput } from "../../../inputs/ReadingOrderByWithRelationInput";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingWhereInput, {
    nullable: true,
  })
  where?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ReadingOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ReadingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ReadingWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ReadingWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ReadingScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "userId"
        | "bookId"
        | "dateStarted"
        | "dateFinished"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
