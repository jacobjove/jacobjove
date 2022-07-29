import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ReadingSumAggregate", {
  isAbstract: true,
})
export class ReadingSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;
}
