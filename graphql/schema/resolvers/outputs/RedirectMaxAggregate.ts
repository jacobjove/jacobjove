import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectMaxAggregate", {
  isAbstract: true,
})
export class RedirectMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  old_path!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  new_path!: string | null;
}
