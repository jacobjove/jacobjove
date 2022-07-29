import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RedirectCreateManyInput", {
  isAbstract: true,
})
export class RedirectCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  old_path!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  new_path!: string;
}
