import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ReadingAvgAggregate", {
  isAbstract: true,
})
export class ReadingAvgAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  bookId!: number | null;
}
