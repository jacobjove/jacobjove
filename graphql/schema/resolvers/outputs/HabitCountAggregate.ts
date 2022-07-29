import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("HabitCountAggregate", {
  isAbstract: true,
})
export class HabitCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  name!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  isPublic!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  defaultDurationInMinutes!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
