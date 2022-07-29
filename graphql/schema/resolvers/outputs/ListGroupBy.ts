import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ListAvgAggregate } from "../outputs/ListAvgAggregate";
import { ListCountAggregate } from "../outputs/ListCountAggregate";
import { ListMaxAggregate } from "../outputs/ListMaxAggregate";
import { ListMinAggregate } from "../outputs/ListMinAggregate";
import { ListSumAggregate } from "../outputs/ListSumAggregate";

@TypeGraphQL.ObjectType("ListGroupBy", {
  isAbstract: true,
})
export class ListGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: false })
  fields!: Record<string, string>;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => ListCountAggregate, { nullable: true })
  _count!: ListCountAggregate | null;

  @TypeGraphQL.Field((_type) => ListAvgAggregate, { nullable: true })
  _avg!: ListAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ListSumAggregate, { nullable: true })
  _sum!: ListSumAggregate | null;

  @TypeGraphQL.Field((_type) => ListMinAggregate, { nullable: true })
  _min!: ListMinAggregate | null;

  @TypeGraphQL.Field((_type) => ListMaxAggregate, { nullable: true })
  _max!: ListMaxAggregate | null;
}
