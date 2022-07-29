import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { AggregateRoutine } from "../../outputs/AggregateRoutine";
import { AggregateRoutineArgs } from "./args/AggregateRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class AggregateRoutineResolver {
  @TypeGraphQL.Query((_returns) => AggregateRoutine, { nullable: false })
  async aggregateRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineArgs
  ): Promise<AggregateRoutine> {
    return RoutineCrudResolver.prototype.aggregateRoutine(ctx, info, args);
  }
}
