import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActAvgAggregate } from "../outputs/ActAvgAggregate";
import { ActCountAggregate } from "../outputs/ActCountAggregate";
import { ActMaxAggregate } from "../outputs/ActMaxAggregate";
import { ActMinAggregate } from "../outputs/ActMinAggregate";
import { ActSumAggregate } from "../outputs/ActSumAggregate";

@TypeGraphQL.ObjectType("ActGroupBy", {
  isAbstract: true,
})
export class ActGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  parentId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => ActCountAggregate, { nullable: true })
  _count!: ActCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActAvgAggregate, { nullable: true })
  _avg!: ActAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActSumAggregate, { nullable: true })
  _sum!: ActSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActMinAggregate, { nullable: true })
  _min!: ActMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActMaxAggregate, { nullable: true })
  _max!: ActMaxAggregate | null;
}
