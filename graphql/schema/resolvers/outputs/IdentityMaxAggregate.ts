import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityMaxAggregate", {
  isAbstract: true,
})
export class IdentityMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  slug!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description!: string | null;
}
