import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ReadingMaxAggregate", { isAbstract: true })
export class ReadingMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  _id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateStarted!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateFinished!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
