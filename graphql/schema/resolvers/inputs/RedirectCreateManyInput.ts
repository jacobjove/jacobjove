import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("RedirectCreateManyInput", {
  isAbstract: true,
})
export class RedirectCreateManyInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  old_path!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  new_path!: string;
}
