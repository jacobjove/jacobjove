import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ListSumAggregate", {
  isAbstract: true,
})
export class ListSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  ownerId!: string | null;
}
