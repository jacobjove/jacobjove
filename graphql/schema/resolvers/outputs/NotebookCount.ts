import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NotebookCount", {
  isAbstract: true,
})
export class NotebookCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  notes!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  userPermissions!: number;
}
