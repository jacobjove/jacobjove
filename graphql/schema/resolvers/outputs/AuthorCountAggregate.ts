import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AuthorCountAggregate", {
  isAbstract: true,
})
export class AuthorCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  slug!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
