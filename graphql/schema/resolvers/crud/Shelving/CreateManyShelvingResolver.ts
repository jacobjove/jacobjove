import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Shelving } from "../../../models/Shelving";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyShelvingArgs } from "./args/CreateManyShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class CreateManyShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    return ShelvingCrudResolver.prototype.createManyShelving(ctx, info, args);
  }
}
