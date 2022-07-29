import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookshelfAvgAggregate } from "../outputs/BookshelfAvgAggregate";
import { BookshelfCountAggregate } from "../outputs/BookshelfCountAggregate";
import { BookshelfMaxAggregate } from "../outputs/BookshelfMaxAggregate";
import { BookshelfMinAggregate } from "../outputs/BookshelfMinAggregate";
import { BookshelfSumAggregate } from "../outputs/BookshelfSumAggregate";

@TypeGraphQL.ObjectType("BookshelfGroupBy", {
  isAbstract: true,
})
export class BookshelfGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => BookshelfCountAggregate, { nullable: true })
  _count!: BookshelfCountAggregate | null;

  @TypeGraphQL.Field(() => BookshelfAvgAggregate, { nullable: true })
  _avg!: BookshelfAvgAggregate | null;

  @TypeGraphQL.Field(() => BookshelfSumAggregate, { nullable: true })
  _sum!: BookshelfSumAggregate | null;

  @TypeGraphQL.Field(() => BookshelfMinAggregate, { nullable: true })
  _min!: BookshelfMinAggregate | null;

  @TypeGraphQL.Field(() => BookshelfMaxAggregate, { nullable: true })
  _max!: BookshelfMaxAggregate | null;
}
