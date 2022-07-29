import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipOrderByWithRelationInput } from "../../../inputs/AuthorshipOrderByWithRelationInput";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAuthorshipArgs {
  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  where?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field(() => [AuthorshipOrderByWithRelationInput], { nullable: true })
  orderBy?: AuthorshipOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: true })
  cursor?: AuthorshipWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
