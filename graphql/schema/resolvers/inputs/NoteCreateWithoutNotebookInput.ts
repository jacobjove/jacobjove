import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("NoteCreateWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteCreateWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  title?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  body?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
