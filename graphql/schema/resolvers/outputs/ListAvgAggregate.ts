import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ListAvgAggregate", {
  isAbstract: true,
})
export class ListAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  ownerId!: number | null;
}
