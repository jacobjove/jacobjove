import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ShelvingAvgAggregate", {
  isAbstract: true,
})
export class ShelvingAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  bookId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  shelfId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  position!: number | null;
}
