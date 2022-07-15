import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { BookAvgAggregate } from "../outputs/BookAvgAggregate";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
import { BookSumAggregate } from "../outputs/BookSumAggregate";

@TypeGraphQL.ObjectType("BookGroupBy", {
  isAbstract: true,
})
export class BookGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  isbn!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  isbn13!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  authorNames!: string[] | null;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  authorNamesLf!: string[] | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  publicationYear!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  originalPublicationYear!: number | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: false,
  })
  extra!: Record<string, string>;

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

  @TypeGraphQL.Field((_type) => BookCountAggregate, {
    nullable: true,
  })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field((_type) => BookAvgAggregate, {
    nullable: true,
  })
  _avg!: BookAvgAggregate | null;

  @TypeGraphQL.Field((_type) => BookSumAggregate, {
    nullable: true,
  })
  _sum!: BookSumAggregate | null;

  @TypeGraphQL.Field((_type) => BookMinAggregate, {
    nullable: true,
  })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field((_type) => BookMaxAggregate, {
    nullable: true,
  })
  _max!: BookMaxAggregate | null;
}
