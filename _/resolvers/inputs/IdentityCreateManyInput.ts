import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("IdentityCreateManyInput", { isAbstract: true })
export class IdentityCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;
}
