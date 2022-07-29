// import { getPrismaFromContext, getFirestoreDocDataFromSnapshot } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "../../../models/Item";
import { List } from "../../../models/List";

@TypeGraphQL.Resolver((_of) => Item)
export class ItemRelationsResolver {
  @TypeGraphQL.FieldResolver(() => List, { nullable: false })
  async list(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: ApolloContext): Promise<List> {
    throw new Error("Not implemented");
  }
}
