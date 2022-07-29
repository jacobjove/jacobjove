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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  fields!: Record<string, string>;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ListCountAggregate, { nullable: true })
  _count!: ListCountAggregate | null;

  @TypeGraphQL.Field(() => ListAvgAggregate, { nullable: true })
  _avg!: ListAvgAggregate | null;

  @TypeGraphQL.Field(() => ListSumAggregate, { nullable: true })
  _sum!: ListSumAggregate | null;

  @TypeGraphQL.Field(() => ListMinAggregate, { nullable: true })
  _min!: ListMinAggregate | null;

  @TypeGraphQL.Field(() => ListMaxAggregate, { nullable: true })
  _max!: ListMaxAggregate | null;
}
