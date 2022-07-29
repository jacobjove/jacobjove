import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookOrderByWithRelationInput } from "../../../inputs/BookOrderByWithRelationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookArgs {
  @TypeGraphQL.Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput | undefined;

  @TypeGraphQL.Field(() => [BookOrderByWithRelationInput], { nullable: true })
  orderBy?: BookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  cursor?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
