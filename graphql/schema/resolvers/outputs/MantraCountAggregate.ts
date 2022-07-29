import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MantraCountAggregate", {
  isAbstract: true,
})
export class MantraCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  content!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
