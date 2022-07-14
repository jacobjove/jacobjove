import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyItemArgs } from "./args/UpdateManyItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class UpdateManyItemResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyItemArgs
  ): Promise<AffectedRowsOutput> {
    return ItemCrudResolver.prototype.updateManyItem(ctx, info, args);
  }
}
