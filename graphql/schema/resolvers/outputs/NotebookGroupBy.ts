import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { NotebookAvgAggregate } from "../outputs/NotebookAvgAggregate";
import { NotebookCountAggregate } from "../outputs/NotebookCountAggregate";
import { NotebookMaxAggregate } from "../outputs/NotebookMaxAggregate";
import { NotebookMinAggregate } from "../outputs/NotebookMinAggregate";
import { NotebookSumAggregate } from "../outputs/NotebookSumAggregate";

@TypeGraphQL.ObjectType("NotebookGroupBy", {
  isAbstract: true,
})
export class NotebookGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => NotebookCountAggregate, {
    nullable: true,
  })
  _count!: NotebookCountAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookAvgAggregate, {
    nullable: true,
  })
  _avg!: NotebookAvgAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookSumAggregate, {
    nullable: true,
  })
  _sum!: NotebookSumAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookMinAggregate, {
    nullable: true,
  })
  _min!: NotebookMinAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookMaxAggregate, {
    nullable: true,
  })
  _max!: NotebookMaxAggregate | null;
}
