import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Routine } from "../../../models/Routine";
import { DeleteRoutineArgs } from "./args/DeleteRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class DeleteRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: true,
  })
  async deleteRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineArgs
  ): Promise<Routine | null> {
    return RoutineCrudResolver.prototype.deleteRoutine(ctx, info, args);
  }
}
