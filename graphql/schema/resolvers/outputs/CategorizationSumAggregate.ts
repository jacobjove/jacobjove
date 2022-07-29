import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategorizationSumAggregate", {
  isAbstract: true,
})
export class CategorizationSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  categoryId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;
}
