import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("NoteMaxAggregate", {
  isAbstract: true,
})
export class NoteMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notebookId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  body!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isPublic!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
