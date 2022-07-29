import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { FindUniqueRoutineArgs } from "./args/FindUniqueRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class FindUniqueRoutineResolver {
  @TypeGraphQL.Query((_returns) => Routine, { nullable: true })
  async routine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineArgs
  ): Promise<Routine | null> {
    return RoutineCrudResolver.prototype.routine(ctx, info, args);
  }
}
