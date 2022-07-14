import * as TypeGraphQL from "type-graphql";
import { NoteAvgAggregate } from "../outputs/NoteAvgAggregate";
import { NoteCountAggregate } from "../outputs/NoteCountAggregate";
import { NoteMaxAggregate } from "../outputs/NoteMaxAggregate";
import { NoteMinAggregate } from "../outputs/NoteMinAggregate";
import { NoteSumAggregate } from "../outputs/NoteSumAggregate";

@TypeGraphQL.ObjectType("AggregateNote", {
  isAbstract: true,
})
export class AggregateNote {
  @TypeGraphQL.Field((_type) => NoteCountAggregate, {
    nullable: true,
  })
  _count!: NoteCountAggregate | null;

  @TypeGraphQL.Field((_type) => NoteAvgAggregate, {
    nullable: true,
  })
  _avg!: NoteAvgAggregate | null;

  @TypeGraphQL.Field((_type) => NoteSumAggregate, {
    nullable: true,
  })
  _sum!: NoteSumAggregate | null;

  @TypeGraphQL.Field((_type) => NoteMinAggregate, {
    nullable: true,
  })
  _min!: NoteMinAggregate | null;

  @TypeGraphQL.Field((_type) => NoteMaxAggregate, {
    nullable: true,
  })
  _max!: NoteMaxAggregate | null;
}
