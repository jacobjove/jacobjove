import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionAvgAggregate } from "../outputs/NotebookUserPermissionAvgAggregate";
import { NotebookUserPermissionCountAggregate } from "../outputs/NotebookUserPermissionCountAggregate";
import { NotebookUserPermissionMaxAggregate } from "../outputs/NotebookUserPermissionMaxAggregate";
import { NotebookUserPermissionMinAggregate } from "../outputs/NotebookUserPermissionMinAggregate";
import { NotebookUserPermissionSumAggregate } from "../outputs/NotebookUserPermissionSumAggregate";

@TypeGraphQL.ObjectType("AggregateNotebookUserPermission", {
  isAbstract: true,
})
export class AggregateNotebookUserPermission {
  @TypeGraphQL.Field(() => NotebookUserPermissionCountAggregate, { nullable: true })
  _count!: NotebookUserPermissionCountAggregate | null;

  @TypeGraphQL.Field(() => NotebookUserPermissionAvgAggregate, { nullable: true })
  _avg!: NotebookUserPermissionAvgAggregate | null;

  @TypeGraphQL.Field(() => NotebookUserPermissionSumAggregate, { nullable: true })
  _sum!: NotebookUserPermissionSumAggregate | null;

  @TypeGraphQL.Field(() => NotebookUserPermissionMinAggregate, { nullable: true })
  _min!: NotebookUserPermissionMinAggregate | null;

  @TypeGraphQL.Field(() => NotebookUserPermissionMaxAggregate, { nullable: true })
  _max!: NotebookUserPermissionMaxAggregate | null;
}
