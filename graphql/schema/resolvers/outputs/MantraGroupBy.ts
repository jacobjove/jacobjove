import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { MantraAvgAggregate } from "../outputs/MantraAvgAggregate";
import { MantraCountAggregate } from "../outputs/MantraCountAggregate";
import { MantraMaxAggregate } from "../outputs/MantraMaxAggregate";
import { MantraMinAggregate } from "../outputs/MantraMinAggregate";
import { MantraSumAggregate } from "../outputs/MantraSumAggregate";

@TypeGraphQL.ObjectType("MantraGroupBy", {
  isAbstract: true,
})
export class MantraGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

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

  @TypeGraphQL.Field((_type) => MantraCountAggregate, {
    nullable: true,
  })
  _count!: MantraCountAggregate | null;

  @TypeGraphQL.Field((_type) => MantraAvgAggregate, {
    nullable: true,
  })
  _avg!: MantraAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MantraSumAggregate, {
    nullable: true,
  })
  _sum!: MantraSumAggregate | null;

  @TypeGraphQL.Field((_type) => MantraMinAggregate, {
    nullable: true,
  })
  _min!: MantraMinAggregate | null;

  @TypeGraphQL.Field((_type) => MantraMaxAggregate, {
    nullable: true,
  })
  _max!: MantraMaxAggregate | null;
}
