import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("RedirectCreateInput", {
  isAbstract: true,
})
export class RedirectCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  old_path!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  new_path!: string;
}
