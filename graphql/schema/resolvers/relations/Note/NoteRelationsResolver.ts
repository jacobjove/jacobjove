// import { getPrismaFromContext, getFirestoreDocDataFromSnapshot } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../../../models/Note";
import { Notebook } from "../../../models/Notebook";

@TypeGraphQL.Resolver((_of) => Note)
export class NoteRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Notebook, { nullable: false })
  async notebook(
    @TypeGraphQL.Root() note: Note,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Notebook> {
    throw new Error("Not implemented");
  }
}
