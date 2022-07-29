import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("UserCount", {
  isAbstract: true,
})
export class UserCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  accounts!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  calendars!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  identities!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  values!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  beliefs!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  mantras!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  habits!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  tasks!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  dashboards!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  notebooks!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  notebookPermissions!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  lists!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  readings!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  bookshelves!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  bookReviews!: number;
}
