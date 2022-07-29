import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ShelvingCountAggregate", {
  isAbstract: true,
})
export class ShelvingCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rationale!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
