import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { NotebookUserPermissionAvgAggregate } from "../outputs/NotebookUserPermissionAvgAggregate";
import { NotebookUserPermissionCountAggregate } from "../outputs/NotebookUserPermissionCountAggregate";
import { NotebookUserPermissionMaxAggregate } from "../outputs/NotebookUserPermissionMaxAggregate";
import { NotebookUserPermissionMinAggregate } from "../outputs/NotebookUserPermissionMinAggregate";
import { NotebookUserPermissionSumAggregate } from "../outputs/NotebookUserPermissionSumAggregate";

@TypeGraphQL.ObjectType("NotebookUserPermissionGroupBy", {
  isAbstract: true,
})
export class NotebookUserPermissionGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  notebookId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCountAggregate, {
    nullable: true,
  })
  _count!: NotebookUserPermissionCountAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionAvgAggregate, {
    nullable: true,
  })
  _avg!: NotebookUserPermissionAvgAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionSumAggregate, {
    nullable: true,
  })
  _sum!: NotebookUserPermissionSumAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionMinAggregate, {
    nullable: true,
  })
  _min!: NotebookUserPermissionMinAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionMaxAggregate, {
    nullable: true,
  })
  _max!: NotebookUserPermissionMaxAggregate | null;
}
