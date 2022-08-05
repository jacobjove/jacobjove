// import { getFirestoreDocDataFromSnapshot } from "../../../helpers";
import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "@/graphql/schema/generated/models";
import { List } from "@/graphql/schema/generated/models";

@TypeGraphQL.Resolver((_of) => Item)
export class ItemRelationsResolver {
  @TypeGraphQL.FieldResolver(() => List, { nullable: false })
  async list(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: GqlContext): Promise<List> {
    throw new Error("Not implemented");
  }
}
