import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityMinAggregate", {
  isAbstract: true,
})
export class IdentityMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;
}
