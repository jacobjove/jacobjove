import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookAvgAggregate } from "../outputs/NotebookAvgAggregate";
import { NotebookCountAggregate } from "../outputs/NotebookCountAggregate";
import { NotebookMaxAggregate } from "../outputs/NotebookMaxAggregate";
import { NotebookMinAggregate } from "../outputs/NotebookMinAggregate";
import { NotebookSumAggregate } from "../outputs/NotebookSumAggregate";

@TypeGraphQL.ObjectType("NotebookGroupBy", { isAbstract: true })
export class NotebookGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  public!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => NotebookCountAggregate, { nullable: true })
  _count!: NotebookCountAggregate | null;

  @TypeGraphQL.Field(() => NotebookAvgAggregate, { nullable: true })
  _avg!: NotebookAvgAggregate | null;

  @TypeGraphQL.Field(() => NotebookSumAggregate, { nullable: true })
  _sum!: NotebookSumAggregate | null;

  @TypeGraphQL.Field(() => NotebookMinAggregate, { nullable: true })
  _min!: NotebookMinAggregate | null;

  @TypeGraphQL.Field(() => NotebookMaxAggregate, { nullable: true })
  _max!: NotebookMaxAggregate | null;
}
