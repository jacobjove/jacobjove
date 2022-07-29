import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RedirectMinAggregate", {
  isAbstract: true,
})
export class RedirectMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  old_path!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  new_path!: string | null;
}
