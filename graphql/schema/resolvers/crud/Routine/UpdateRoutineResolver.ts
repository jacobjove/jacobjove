import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { UpdateRoutineArgs } from "./args/UpdateRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class UpdateRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: true })
  async updateRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineArgs
  ): Promise<Routine | null> {
    return RoutineCrudResolver.prototype.updateRoutine(ctx, info, args);
  }
}
