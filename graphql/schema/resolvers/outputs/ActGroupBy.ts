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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  parentId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ActCountAggregate, { nullable: true })
  _count!: ActCountAggregate | null;

  @TypeGraphQL.Field(() => ActAvgAggregate, { nullable: true })
  _avg!: ActAvgAggregate | null;

  @TypeGraphQL.Field(() => ActSumAggregate, { nullable: true })
  _sum!: ActSumAggregate | null;

  @TypeGraphQL.Field(() => ActMinAggregate, { nullable: true })
  _min!: ActMinAggregate | null;

  @TypeGraphQL.Field(() => ActMaxAggregate, { nullable: true })
  _max!: ActMaxAggregate | null;
}
