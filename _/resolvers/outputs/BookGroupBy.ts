import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookAvgAggregate } from "../outputs/BookAvgAggregate";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
import { BookSumAggregate } from "../outputs/BookSumAggregate";

@TypeGraphQL.ObjectType("BookGroupBy", { isAbstract: true })
export class BookGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn13!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  authorNames!: string[] | null;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  authorNamesLf!: string[] | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear!: number | null;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  extra!: Record<string, string>;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => BookCountAggregate, { nullable: true })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field(() => BookAvgAggregate, { nullable: true })
  _avg!: BookAvgAggregate | null;

  @TypeGraphQL.Field(() => BookSumAggregate, { nullable: true })
  _sum!: BookSumAggregate | null;

  @TypeGraphQL.Field(() => BookMinAggregate, { nullable: true })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field(() => BookMaxAggregate, { nullable: true })
  _max!: BookMaxAggregate | null;
}
