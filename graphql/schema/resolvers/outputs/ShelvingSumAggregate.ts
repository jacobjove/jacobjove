import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ShelvingSumAggregate", {
  isAbstract: true,
})
export class ShelvingSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  shelfId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position!: number | null;
}
