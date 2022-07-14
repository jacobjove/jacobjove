import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ReadingSumAggregate", {
  isAbstract: true,
})
export class ReadingSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  bookId!: string | null;
}
