import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ShelvingSumAggregate", {
  isAbstract: true,
})
export class ShelvingSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  shelfId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  position!: number | null;
}
