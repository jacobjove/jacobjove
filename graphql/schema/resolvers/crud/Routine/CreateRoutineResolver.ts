import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Routine } from "../../../models/Routine";
import { CreateRoutineArgs } from "./args/CreateRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class CreateRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: false,
  })
  async createRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineArgs
  ): Promise<Routine> {
    return RoutineCrudResolver.prototype.createRoutine(ctx, info, args);
  }
}
