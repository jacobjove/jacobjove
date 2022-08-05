// import { getFirestoreDocDataFromSnapshot } from "../../../helpers";
import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "@/graphql/schema/generated/models/note.model";
import { Notebook } from "@/graphql/schema/generated/models/notebook.model";

@TypeGraphQL.Resolver((_of) => Note)
export class NoteRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Notebook, { nullable: false })
  async notebook(
    @TypeGraphQL.Root() note: Note,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Notebook> {
    throw new Error("Not implemented");
  }
}
