import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookshelfCountAggregate", {
  isAbstract: true,
})
export class BookshelfCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  slug!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  isPublic!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  description!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
