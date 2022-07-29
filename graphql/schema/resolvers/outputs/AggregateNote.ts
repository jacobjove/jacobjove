import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteAvgAggregate } from "../outputs/NoteAvgAggregate";
import { NoteCountAggregate } from "../outputs/NoteCountAggregate";
import { NoteMaxAggregate } from "../outputs/NoteMaxAggregate";
import { NoteMinAggregate } from "../outputs/NoteMinAggregate";
import { NoteSumAggregate } from "../outputs/NoteSumAggregate";

@TypeGraphQL.ObjectType("AggregateNote", {
  isAbstract: true,
})
export class AggregateNote {
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
