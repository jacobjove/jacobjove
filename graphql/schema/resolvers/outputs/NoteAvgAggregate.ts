import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NoteAvgAggregate", {
  isAbstract: true,
})
export class NoteAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  notebookId!: number | null;
}
