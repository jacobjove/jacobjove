import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ItemCountAggregate", {
  isAbstract: true,
})
export class ItemCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  listId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  data!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
