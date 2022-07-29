import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MantraCountAggregate", {
  isAbstract: true,
})
export class MantraCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  content!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
