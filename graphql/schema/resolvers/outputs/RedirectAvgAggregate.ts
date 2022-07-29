import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectAvgAggregate", {
  isAbstract: true,
})
export class RedirectAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
