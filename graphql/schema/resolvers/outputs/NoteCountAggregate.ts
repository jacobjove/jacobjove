import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NoteCountAggregate", {
  isAbstract: true,
})
export class NoteCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  notebookId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  title!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  body!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  isPublic!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
