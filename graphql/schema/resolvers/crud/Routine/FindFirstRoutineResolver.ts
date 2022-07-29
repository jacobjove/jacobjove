import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { FindFirstRoutineArgs } from "./args/FindFirstRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class FindFirstRoutineResolver {
  @TypeGraphQL.Query((_returns) => Routine, { nullable: true })
  async findFirstRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineArgs
  ): Promise<Routine | null> {
    return RoutineCrudResolver.prototype.findFirstRoutine(ctx, info, args);
  }
}
