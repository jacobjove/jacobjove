import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookshelfWhereUniqueInput", { isAbstract: true })
export class BookshelfWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug?: string | undefined;
}
