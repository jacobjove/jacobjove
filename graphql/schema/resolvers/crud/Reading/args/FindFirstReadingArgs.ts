import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingScalarFieldEnum } from "../../../../enums/ReadingScalarFieldEnum";
import { ReadingOrderByWithRelationInput } from "../../../inputs/ReadingOrderByWithRelationInput";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstReadingArgs {
  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  where?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field(() => [ReadingOrderByWithRelationInput], { nullable: true })
  orderBy?: ReadingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ReadingWhereUniqueInput, { nullable: true })
  cursor?: ReadingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ReadingScalarFieldEnum], { nullable: true })
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
