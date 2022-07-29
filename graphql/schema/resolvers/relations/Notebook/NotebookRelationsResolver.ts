import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import {
  getFirestoreDocDataFromSnapshot,
  getPrismaFromContext,
  getUserSubcollectionData,
} from "../../../helpers";
import { Note } from "../../../models/Note";
import { Notebook } from "../../../models/Notebook";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { User } from "../../../models/User";
import { NotebookNotesArgs } from "./args/NotebookNotesArgs";
import { NotebookUserPermissionsArgs } from "./args/NotebookUserPermissionsArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class NotebookRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async owner(
    @TypeGraphQL.Root() notebook: Notebook,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`users/${notebook.ownerId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<User>;
        });
    } else {
      console.error("Why are we here?");
      return getPrismaFromContext(ctx)
        .notebook.findUnique({
          where: {
            id: notebook.id,
          },
        })
        .owner({});
    }
  }

  @TypeGraphQL.FieldResolver(() => [Note], { nullable: false })
  async notes(
    @TypeGraphQL.Root() notebook: Notebook,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: NotebookNotesArgs
  ): Promise<Note[]> {
    return getUserSubcollectionData("notes", ctx, undefined, args) as Promise<Note[]>;
  }

  @TypeGraphQL.FieldResolver(() => [NotebookUserPermission], { nullable: false })
  async userPermissions(
    @TypeGraphQL.Root() notebook: Notebook,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: NotebookUserPermissionsArgs
  ): Promise<NotebookUserPermission[]> {
    throw new Error("Not implemented");
  }
}
