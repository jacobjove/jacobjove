import * as TypeGraphQL from "type-graphql";
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
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

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

  @TypeGraphQL.Field((_type) => BookshelfCountAggregate, {
    nullable: true,
  })
  _count!: BookshelfCountAggregate | null;

  @TypeGraphQL.Field((_type) => BookshelfAvgAggregate, {
    nullable: true,
  })
  _avg!: BookshelfAvgAggregate | null;

  @TypeGraphQL.Field((_type) => BookshelfSumAggregate, {
    nullable: true,
  })
  _sum!: BookshelfSumAggregate | null;

  @TypeGraphQL.Field((_type) => BookshelfMinAggregate, {
    nullable: true,
  })
  _min!: BookshelfMinAggregate | null;

  @TypeGraphQL.Field((_type) => BookshelfMaxAggregate, {
    nullable: true,
  })
  _max!: BookshelfMaxAggregate | null;
}
