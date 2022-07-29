import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorOrderByWithRelationInput } from "../../../inputs/AuthorOrderByWithRelationInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAuthorArgs {
  @TypeGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(() => [AuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: AuthorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: true })
  cursor?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
