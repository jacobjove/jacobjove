import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Routine } from "../../../models/Routine";
import { UpsertRoutineArgs } from "./args/UpsertRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class UpsertRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: false,
  })
  async upsertRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineArgs
  ): Promise<Routine> {
    return RoutineCrudResolver.prototype.upsertRoutine(ctx, info, args);
  }
}
