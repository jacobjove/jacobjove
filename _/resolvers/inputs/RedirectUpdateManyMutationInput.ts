import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RedirectUpdateManyMutationInput", { isAbstract: true })
export class RedirectUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  old_path?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  new_path?: string | null | undefined;
}
