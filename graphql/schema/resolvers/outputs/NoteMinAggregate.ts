import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("NoteMinAggregate", {
  isAbstract: true,
})
export class NoteMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notebookId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  body!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
