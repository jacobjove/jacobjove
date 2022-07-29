import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectCountAggregate", {
  isAbstract: true,
})
export class RedirectCountAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  old_path!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  new_path!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
