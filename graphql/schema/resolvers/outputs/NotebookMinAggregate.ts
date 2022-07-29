import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("NotebookMinAggregate", {
  isAbstract: true,
})
export class NotebookMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  ownerId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic!: boolean | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
