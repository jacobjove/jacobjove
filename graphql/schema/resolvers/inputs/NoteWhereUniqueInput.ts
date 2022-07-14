import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("NoteWhereUniqueInput", {
  isAbstract: true,
})
export class NoteWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
