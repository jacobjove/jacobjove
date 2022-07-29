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
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  notebookId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  body!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => NoteCountAggregate, { nullable: true })
  _count!: NoteCountAggregate | null;

  @TypeGraphQL.Field((_type) => NoteAvgAggregate, { nullable: true })
  _avg!: NoteAvgAggregate | null;

  @TypeGraphQL.Field((_type) => NoteSumAggregate, { nullable: true })
  _sum!: NoteSumAggregate | null;

  @TypeGraphQL.Field((_type) => NoteMinAggregate, { nullable: true })
  _min!: NoteMinAggregate | null;

  @TypeGraphQL.Field((_type) => NoteMaxAggregate, { nullable: true })
  _max!: NoteMaxAggregate | null;
}
