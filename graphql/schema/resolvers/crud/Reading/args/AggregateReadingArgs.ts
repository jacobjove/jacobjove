import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingOrderByWithRelationInput } from "../../../inputs/ReadingOrderByWithRelationInput";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";
import { ReadingWhereUniqueInput } from "../../../inputs/ReadingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReadingArgs {
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
}
