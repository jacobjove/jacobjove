import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Routine } from "../../../models/Routine";
import { FindManyRoutineArgs } from "./args/FindManyRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class FindManyRoutineResolver {
  @TypeGraphQL.Query((_returns) => [Routine], {
    nullable: false,
  })
  async routines(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineArgs
  ): Promise<Routine[]> {
    return RoutineCrudResolver.prototype.routines(ctx, info, args);
  }
}
