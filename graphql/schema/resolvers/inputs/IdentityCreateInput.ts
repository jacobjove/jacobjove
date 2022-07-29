import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("IdentityCreateInput", {
  isAbstract: true,
})
export class IdentityCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description?: string | undefined;
}
