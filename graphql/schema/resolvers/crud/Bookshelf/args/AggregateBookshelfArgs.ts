import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfOrderByWithRelationInput } from "../../../inputs/BookshelfOrderByWithRelationInput";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  where?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field(() => [BookshelfOrderByWithRelationInput], { nullable: true })
  orderBy?: BookshelfOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: true })
  cursor?: BookshelfWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
