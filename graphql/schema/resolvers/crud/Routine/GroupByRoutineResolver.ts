import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Routine } from "../../../models/Routine";
import { RoutineGroupBy } from "../../outputs/RoutineGroupBy";
import { GroupByRoutineArgs } from "./args/GroupByRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class GroupByRoutineResolver {
  @TypeGraphQL.Query((_returns) => [RoutineGroupBy], {
    nullable: false,
  })
  async groupByRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByRoutineArgs
  ): Promise<RoutineGroupBy[]> {
    return RoutineCrudResolver.prototype.groupByRoutine(ctx, info, args);
  }
}
