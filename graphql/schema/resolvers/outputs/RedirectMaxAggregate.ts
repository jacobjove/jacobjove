import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectMaxAggregate", {
  isAbstract: true,
})
export class RedirectMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  old_path!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  new_path!: string | null;
}
