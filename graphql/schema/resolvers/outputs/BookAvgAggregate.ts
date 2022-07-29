import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookAvgAggregate", {
  isAbstract: true,
})
export class BookAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  publicationYear!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  originalPublicationYear!: number | null;
}
