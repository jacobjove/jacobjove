import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectCountAggregate", {
  isAbstract: true,
})
export class RedirectCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  old_path!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  new_path!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
