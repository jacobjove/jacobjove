import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RedirectCreateInput", { isAbstract: true })
export class RedirectCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  old_path!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  new_path!: string;
}
