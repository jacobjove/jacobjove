import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ReadingWhereUniqueInput", {
  isAbstract: true,
})
export class ReadingWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
