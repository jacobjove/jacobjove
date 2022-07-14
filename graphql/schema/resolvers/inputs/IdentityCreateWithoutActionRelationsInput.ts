import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("IdentityCreateWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityCreateWithoutActionRelationsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;
}
