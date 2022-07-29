import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NoteAvgAggregate } from "../outputs/NoteAvgAggregate";
import { NoteCountAggregate } from "../outputs/NoteCountAggregate";
import { NoteMaxAggregate } from "../outputs/NoteMaxAggregate";
import { NoteMinAggregate } from "../outputs/NoteMinAggregate";
import { NoteSumAggregate } from "../outputs/NoteSumAggregate";

@TypeGraphQL.ObjectType("NoteGroupBy", {
  isAbstract: true,
})
export class NoteGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  notebookId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  body!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => NoteCountAggregate, { nullable: true })
  _count!: NoteCountAggregate | null;

  @TypeGraphQL.Field(() => NoteAvgAggregate, { nullable: true })
  _avg!: NoteAvgAggregate | null;

  @TypeGraphQL.Field(() => NoteSumAggregate, { nullable: true })
  _sum!: NoteSumAggregate | null;

  @TypeGraphQL.Field(() => NoteMinAggregate, { nullable: true })
  _min!: NoteMinAggregate | null;

  @TypeGraphQL.Field(() => NoteMaxAggregate, { nullable: true })
  _max!: NoteMaxAggregate | null;
}
