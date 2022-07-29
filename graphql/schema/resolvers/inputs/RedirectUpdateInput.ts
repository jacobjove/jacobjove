import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RedirectUpdateInput", {
  isAbstract: true,
})
export class RedirectUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  old_path?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  new_path?: string | null | undefined;
}
