import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("ReadingWhereUniqueInput", {
  isAbstract: true,
})
export class ReadingWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
